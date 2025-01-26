"use server"

import { db } from "@/lib/prisma";
import { supabase } from "@/lib/supabase/supabase"
import { render } from "@react-email/components";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { MessageEmail } from "../../../../templates/email-templates/messageEmail";
import multer from "multer";

// Define the type for the request body
interface FormRequestBody {
  endpoint: string;
  content: string;
}

// Define the type for the response data
interface FormResponse {
  success?: boolean;
  data?: any;
  error?: string;
}

const basicPlanArray = [
  "subject", "from_name", "replyto", "redirect", "iamhuman", "access_key"
]

const upload = multer({
  storage: multer.memoryStorage(), // Use memory storage to avoid saving to disk
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});


export async function POST(
  request: Request
) {
  if (request.method === 'POST') {
    const contentType = request.headers.get("Content-Type");
    const isJsonRequest = contentType?.includes("application/json");
    const isFormDataRequest = contentType?.includes("application/x-www-form-urlencoded");
    const isMultipartRequest = contentType?.includes("multipart/form-data");
    const isJavaScriptRequest = request.headers.get("X-Requested-With") === "XMLHttpRequest"; // For JS/React-based requests
    const host = request.headers.get("host");

    // Access uploaded files from `req.files`
    // const files = request.files as Express.Multer.File[];

    let formDataObject: { [key: string]: string } = {};
    let formDataFile: { [key: string]: Buffer[] } = {};

    if (isJsonRequest) {
      // Handle JSON-based request (JavaScript/React)
      const body = await request.json();
      formDataObject = body;
    } else if (isFormDataRequest) {
      // Handle form-based request (Simple HTML form)
      const formData = await request.formData();
      // for (const [key, value] of formData.entries()) {
      //   if (value instanceof File) {
      //     // Handle the file
      //     console.log(`File received with key: ${key}, filename: ${value.name}`);
      //     formDataFile[key] = value; // Store the file in formDataObject
      //   } else {
      //     // Handle regular form fields
      //     formDataObject[key] = value.toString();
      //   }
      // }
      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value.toString(); // Store each key-value pair
      }
    }else if (isMultipartRequest) {
      // Handle multipart form data (typically used for file uploads)
      const formData = await request.formData();
      
      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value.toString(); // Store each key-value pair
      }
      // Iterate through form data to check for files
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          const buffer = Buffer.from(await value.arrayBuffer());
          
          if (!formDataFile[key]) {
            formDataFile[key] = [];
          }
          formDataFile[key].push(buffer); // Store file in the corresponding key
        }
      }
    } else {
      // Unknown or unsupported content type
      return Response.json({ message: 'Unsupported request format' }, { status: 400 });
    }

    const totalFiles = Object.values(formDataFile)
  .reduce((acc, fileArray) => acc + fileArray.length, 0);

    const user = await db.user.findUnique({
      where: { apiKey: formDataObject.access_key },
    });
    if(user)
    {
      if(user.planId === 1)
      {
        // formDataObject = convertKeysToLowerCase(formDataObject)
        // BasicPlan(formDataObject, user)
      }
      // await sendEmail(user.email, { ...modifiedList });
      return Response.redirect('http://localhost:3000/thanks')
    }
    else
    {
      return Response.json({ message:"Wrong Access Key" }, {status:400});
    }
  } else {
    return Response.json({ message:"Went wrong" }, {status:400});
  }
}

async function BasicPlan(Data: any, userData: any)
{
  let modifiedList = await filterJson(Data, basicPlanArray);
  const currentDate = new Date();
  const planStartDate = new Date(userData.lastPlanUpdateAt);
  const planEndDate = new Date(planStartDate);
  planEndDate.setDate(planStartDate.getDate() + 30); // Add 30 days to plan start date

  if (currentDate > planEndDate) {
    // Reset submission count and update planStartDate to current date
    await db.user.update({
      where: { id: userData.id },
      data: { planLastUpdateAt: currentDate, submissionCount: 0 },
    });
  }

  const maxSubmissions = 300;
  if (userData.submissionCount >= maxSubmissions) {
    return {
      message: "Submission limit reached",
      success: false,
      status: 400
    }
  }

  // Increment submission count
  await db.user.update({
    where: { id: userData.id },
    data: { submissionCount: { increment: 1 } },
  });


  if(Data.IAmHuman === "on")
  {
    return {
      message: "Bot Detected",
      success: false,
      status: 400
    }
  }

  // await sendEmail(userData.email, modifiedList, Data)
}

function flattenJson(obj: any, parentKey = ''): { key: string; value: any }[] {
  const result: { key: string; value: any }[] = [];

  if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
          const newKey = parentKey ? `${parentKey}[${index}]` : `[${index}]`;
          result.push(...flattenJson(item, newKey));
      });
  } else if (obj !== null && typeof obj === 'object') {
      Object.entries(obj).forEach(([key, value]) => {
          const newKey = parentKey ? `${parentKey}.${key}` : key;
          result.push(...flattenJson(value, newKey));
      });
  } else {
      // For primitive values, add to the result
      result.push({ key: parentKey, value: obj });
  }

  return result;
}


async function sendEmail(to: string, data: { [key: string]: string }, EmailData: { [key: string]: string } ) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // Hostinger SMTP host
    port: 465,                   // Port for SSL
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  // const emailContent = `
  //   <h1>Form Submission Details</h1>
  //   <ul>
  //     ${Object.entries(data)
  //       .map(([key, value]) => `<li><strong style="text-transformation:'capitalize'">${key}:</strong> ${value}</li>`)
  //       .join("")}
  //   </ul>
  // `;

  
  const emailContent = await render(await MessageEmail(data));

  await transporter.sendMail({
    from: `${EmailData.from_name || "Notification"} <${process.env.EMAIL_USER}>`,
    to,
    subject: `${EmailData.subject || "New Form Submission from your Website"}`,
    html: emailContent,
    ...(EmailData.replyto ? { replyTo: EmailData.replyto } : {}),
  });
}


function convertKeysToLowerCase(obj: any): any {
  if (Array.isArray(obj)) {
      // If the object is an array, recursively process each element
      return obj.map(item => convertKeysToLowerCase(item));
  } else if (obj !== null && typeof obj === 'object') {
      // If the object is an object, process its keys
      return Object.keys(obj).reduce((result, key) => {
          const lowerCaseKey = key.toLowerCase();
          result[lowerCaseKey] = convertKeysToLowerCase(obj[key]);
          return result;
      }, {} as Record<string, any>);
  }
  // If the value is neither an object nor an array, return it as-is
  return obj;
}


function filterJson(obj: any, excludeKeys: string[]): any {
  if (Array.isArray(obj)) {
      // Recursively process arrays
      return obj.map(item => filterJson(item, excludeKeys));
  } else if (obj !== null && typeof obj === 'object') {
      // Process object keys
      return Object.keys(obj).reduce((filteredObj, key) => {
          if (!excludeKeys.includes(key)) {
              // Include the key if it's not in the exclude list
              filteredObj[key] = filterJson(obj[key], excludeKeys);
          }
          return filteredObj;
      }, {} as Record<string, any>);
  }
  // Return primitive values as-is
  return obj;
}