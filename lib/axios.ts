import Axios from 'axios';
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
    headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
    },
});

axios.interceptors.request.use(
    async (config) => {
        const session = await getServerSession(authOptions)
        if (!config.headers["Authorization"] && session) {
            config.headers[
                "Authorization"
            ] = `Bearer ${session?.user?.accessToken}`;
        }
        return config;
    },
    (error) => {console.log("error axios",error); Promise.reject(error)}
);

axios.interceptors.response.use(
    (response) => response.data,
    
);