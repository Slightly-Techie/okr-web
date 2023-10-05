import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authenticationOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    secret: process.env.JWT_SECRET
}

const handler = NextAuth(authenticationOptions); 
export { handler as GET, handler as POST }