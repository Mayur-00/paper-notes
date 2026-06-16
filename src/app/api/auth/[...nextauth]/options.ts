import { connectToDb } from "@/lib/dbConnect";
import UserModel from "@/models/user.mode";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await connectToDb();
        if (!credentials) {
          return null;
        }

        try {
          const user = await UserModel.findOne({ email: credentials.email });

          // Bug Fix 1: If user is not found, return null explicitly
          if (!user) {
            return null;
          }

          const isPasswordCorrect = await user.comparePassword(
            credentials.password,
          );

          if (!isPasswordCorrect) {
            return null; // Next-Auth standard failure trigger
          }

          return user;
        } catch (error) {
          // Bug Fix 2: Extract the message safely so it does not crash Next-Auth
          console.log(error)
          throw new Error( "Authentication error occurred");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.username = user.username;
      }
      return token;
    },

    async session({ session, token }) {

      if (token) {
        session.user._id = token._id as string;
        session.user.username = token.username as string
      }
      return session;
    },
  },
  pages: {
    signIn: "/signIn",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
