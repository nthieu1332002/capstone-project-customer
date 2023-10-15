
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import axios from "axios";


export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Đăng nhập thất bại');
        }

        const res = await axios.post("https://dummyjson.com/auth/login", {
          username: credentials?.email,
          password: credentials?.password,
        })
        if (!res.status) {
          throw new Error('Đăng nhập thất bại');
        }

        const user = await res.data
        const role = await res.data.gender
        if (!user) {
          throw new Error('Invalid credentials');
        }
        console.log("user", { ...user, role });

        return { ...user, role }
      },
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role
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