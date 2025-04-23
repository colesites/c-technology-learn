"use server";

import * as z from "zod";
import { SignupSchema } from "@/schemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const signup = async (values: z.infer<typeof SignupSchema>) => {
  // Validate form fields
  const validatedFields = await SignupSchema.spa(values);
  const API_SIGNUP_URL = process.env.API_SIGNUP_URL ?? "http://127.0.0.1:1337/api/auth/local/register";
  
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  
  try {
    const response = await fetch(API_SIGNUP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Check for existing user errors from Strapi
      const errorMessage = data?.error?.message || "Registration failed!";
      if (errorMessage.includes("Email already taken")) {
        return { error: "Email is already in use. Please sign in." };
      }
      if (errorMessage.includes("Username already taken")) {
        return { error: "Username is already taken. Choose another one." };
      }

      return { error: errorMessage };
    }

    // Send an email using Resend
    const emailResponse = await resend.emails.send({
      from: "ctech.cole@gmail.com", // Change this to your verified sender
      to: values.email,
      subject: "Welcome to Our App!",
      html: `<h1>Welcome, ${values.username}!</h1><p>Your confirmation code is 90300334</p>`,
    });

    if (emailResponse.error) {
      return { error: "Failed to send email!" };
    }

    return { success: "Email sent successfully!", user: data.user };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
