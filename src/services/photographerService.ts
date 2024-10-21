import { AxiosError } from "axios";
import { photographerClient } from "../api/axiosClient"; 

export const photographerSignupService = async (signupData: any) => {
  try {
    const response = await photographerClient.post("/signup", signupData);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data.message);
      }
    } else if (error instanceof Error) {
      return Promise.reject(error.message);
    }
    return Promise.reject("An unknown error occurred during signup");
  }
};