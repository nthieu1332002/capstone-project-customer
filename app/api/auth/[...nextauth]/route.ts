
import { axios } from "@/lib/axios";
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        indentifier: { label: "indentifier", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.indentifier || !credentials?.password) {
          throw new Error("[ALL] Invalid credentials");
        }
        const res = await axios.post("/api/customer/login/token", {
          indentifier: credentials?.indentifier,
          password: credentials?.password,
          device_name: "customer_web"
        })
        if (res && res.status !== 200) {
          throw new Error("[ALL] Invalid credentials");

        }
        const user = res.data.data.customer;
        console.log({ ...user, accessToken: res.data.data.access_token });
        return { ...user, accessToken: res.data.data.access_token }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.phone = user.phone
        token.accessToken = user.accessToken
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.phone = token.phone
        session.user.accessToken = token.accessToken
      }
      return session
    },
  },
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV !== "production",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };