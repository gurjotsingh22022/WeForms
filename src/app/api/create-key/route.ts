
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/lib/prisma';
import nodemailer from "nodemailer";

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

export async function POST(
  request: Request,
){
  if (request.method === 'POST') {
    const body = await request.json();
    const { email } = body;
    console.log(email)

    if (!email) {
        return Response.json({ message: "Email is required" }, { status: 400 });
    }

    try {
      // Check if the email already exists
      const existingUser = await db.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return Response.json({ message: "Email already has an API key. Retrieve it instead of creating a new one." }, { status: 400 });
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

      return Response.json({ apiKey: apiKey }, { status: 201 });
    } catch (error: any) {
      console.error('Error creating API key:', error);
      return Response.json({ message: "Internal server error" }, { status: 500 });
    }
  } else {
    return Response.json({ message: `Method ${request.method} not allowed` }, { status: 405 });
  }
}


export async function GET(){

}



async function sendEmail(to: string, data: { [key: string]: string }) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // Hostinger SMTP host
      port: 465,                   // Port for SSL
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });
  
    const emailContent = `
      <h1>Form Submission Details</h1>
      <ul>
        ${Object.entries(data)
          .map(([key, value]) => `<li><strong style="text-transformation:'capitalize'">${key}:</strong> ${value}</li>`)
          .join("")}
      </ul>
    `;
  
    await transporter.sendMail({
      from: `"Your App Name" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Form Submission Data",
      html: emailContent,
    });
  }