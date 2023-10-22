import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

const authAxios = axios.create({
  baseURL: "http://b6a5-41-139-18-158.ngrok-free.app",
  timeout: 50000,
});

authAxios.interceptors.request.use(async (config) => {
  try {
    const session = (await getServerSession(authOptions)) as any;

    if (session.user.accessToken) {
      config.headers["Authorization"] = `Bearer ${session.user.accessToken}`;
    }
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

export default authAxios;
