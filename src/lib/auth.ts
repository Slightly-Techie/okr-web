import axios from "axios";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

interface Account {
  id_token: string;
}

interface User {
  token: string;
  id: number;
  accessToken: string;
  refreshToken: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      httpOptions: {
        timeout: 500000,
      },
    }),
  ],
  callbacks: {
    async signIn({ account, user }: { account: any; user: any }) {
      const { id_token } = account as Account;
      const payload = {
        credential: id_token,
      };
      const res = await axios.post(
        "http://b6a5-41-139-18-158.ngrok-free.app/auth/login",
        payload
      );
      if (res.status === 200) {
        const { Id, token, refresh_token } = res.data;
        user.id = Id;
        user.accessToken = token;
        user.refreshToken = refresh_token;
        return true;
      }
      return false;
    },
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
