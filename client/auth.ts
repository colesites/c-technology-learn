import NextAuth from "next-auth";

import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = token.sub;

      if (!existingUser) return token;

      // token.role = existingUser.role;

      return token;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
