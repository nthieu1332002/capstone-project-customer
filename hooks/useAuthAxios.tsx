import { authAxios } from "@/lib/axios";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const useAuthAxios = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const requestIntercept = authAxios.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers[
            "Authorization"
          ] = `Bearer ${session?.user?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = authAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error?.response?.status === 401) {
          signOut();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      authAxios.interceptors.request.eject(requestIntercept);
      authAxios.interceptors.response.eject(responseIntercept);
    };
  }, [session]);

  return authAxios;
};

export default useAuthAxios;
