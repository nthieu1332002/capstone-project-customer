import getServerUser from '@/actions/getServerUser';
import Axios from 'axios';

export const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
    headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
    },
});

axios.interceptors.request.use(
    async (config) => {
        const session = await getServerUser();
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
<<<<<<< HEAD
    (error) => {
        console.log("error", error);
        if (error.response.status === 401) {
            // window.location.href = "/login";
            console.log("cc");
        }
        return Promise.reject(error);
    }
=======
>>>>>>> b1ab36bf6a0f80e7f9addcc780b0936cd6600bfe
);