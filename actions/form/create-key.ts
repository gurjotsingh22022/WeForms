"use server"

import { v4 as uuidv4 } from 'uuid';
import { db } from '@/lib/prisma';
import nodemailer from "nodemailer";
import apiKeyTemplate from '../../templates/email-templates/apiKeyTemplate';
import templateGenerator from '@/lib/templateGenerator/templateGenerator';
import { render } from '@react-email/components';

// Define types for the request body and response
interface CreateKeyRequestBody {
  email: string;
}

interface CreateKeyResponse {
  success: boolean;
  message: string;
  apiKey?: string;
  error?: string;
}

export async function CreateKey(
  email: string,
){
  try{

    console.log(email)

    if (!email) {
        return Response.json({ message: "Email is required" }, { status: 400 });
    }

    try {
      // Check if the email already exists
      const existingUser = await db.user.findUnique({
        where: { email },
      });

      console.log(existingUser)

      if (existingUser) {
        const existingUserEmailResp = await sendEmail(existingUser.email, existingUser.apiKey);
        console.log(existingUserEmailResp)
        if(!existingUserEmailResp)
        {
            return {
                message: "Server Error",
                status: 500,
                success: false
            };
        }
        return {
            message: "API Key sent",
            status: 200,
            success: true
        };
      }

      const plan = await db.Plan.findUnique({
        where: { name: "FREE" },
      });

      if (!plan) {
        return Response.json({ message: "Plan not found" }, { status: 400 });
      }

      // Generate a new API key
      const apiKey = uuidv4();

      // Create a new user with the API key
      const user = await db.user.create({
        data: {
          email,
          apiKey,
          planId: plan.id, // Default to Free plan for now
        },
      });

      if (user) {
        const UserEmailResp = await sendEmail(user.email, user.apiKey);
        console.log(UserEmailResp)
        if(!UserEmailResp)
        {
            return {
                message: "Server Error",
                status: 500,
                success: false
            };
        }
        return {
            message: "API Key sent",
            status: 200,
            success: true
        };
      }

      return {
        message: "Server Error",
        status: 500,
        success: false
    };
    } catch (error: any) {
      console.error('Error creating API key:', error);
      return Response.json({ message: "Internal server error" }, { status: 500 });
    }
  } catch {
    return Response.json({ message: `Internal Server Error` }, { status: 500 });
  }
}


export async function GET(){

}



async function sendEmail(to: string, key: string) {
    try{
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com', // Hostinger SMTP host
            port: 465,                   // Port for SSL
            secure: true,
            auth: {
              user: process.env.EMAIL_USER, // Your email address
              pass: process.env.EMAIL_PASS, // Your email password or app-specific password
            },
          });
        
          const emailContent = await render(apiKeyTemplate(key));
        
          await transporter.sendMail({
            from: `"WeForms" <${process.env.EMAIL_USER}>`,
            to,
            subject: "Your Access Key From WeForms",
            html: emailContent,
          });

          return true
    }
    catch
    {
        return false
    }
    
  }