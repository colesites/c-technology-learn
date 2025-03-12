import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import { SigninSchema } from "@/schemas";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Google,
    Credentials({
      async authorize(credentials) {
        const validatedFields = SigninSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          try {
            // Use Strapi's authentication endpoint
            const response = await fetch(`${process.env.STRAPI_API_URL}/api/auth/local`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                identifier: email,
                password: password,
              }),
            });

            const data = await response.json();

            if (response.ok) {
              // Authentication successful
              return {
                id: data.user.id,
                email: data.user.email,
                name: data.user.username,
                jwt: data.jwt, // Strapi JWT token
              };
            } else {
              // Authentication failed
              return null;
            }
          } catch (error) {
            console.error("Authentication error:", error);
            return null;
          }
        }

        return null;
      },
    }),
  ],
});