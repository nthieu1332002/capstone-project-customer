
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from "next-auth/next"

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    console.log("session", session);
    if (!session?.user) {
      return null;
    }
    return session
    
  } catch (err: any) {
    console.log("err", err);
    return null
  }
}

