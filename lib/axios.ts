import Axios from 'axios';
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { signOut } from 'next-auth/react';
export const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
    headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
    },
});
axios.interceptors.response.use(
    (response) => response.data
);


export const authAxios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
    headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
    },
});

authAxios.interceptors.request.use(
    async (config) => {
        const session = await getServerSession(authOptions)
        console.log("session", session);
        if (!config.headers["Authorization"] && session) {
            config.headers[
                "Authorization"
            ] = `Bearer ${session?.user?.accessToken}`;
        }
        return config;
    },
    (error) => {console.log("error axios",error); Promise.reject(error)}
);

authAxios.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        if (error?.response?.status === 401) {
            signOut();
        }
        return Promise.reject(error);
    }
);