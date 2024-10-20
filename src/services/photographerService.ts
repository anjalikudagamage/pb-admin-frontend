import { AxiosError } from "axios";
import { photographerClient } from "../api/axiosClient"; 

export const photographerSignupService = async (signupData: Record<string, string>) => {
  try {
    const { businessName, businessDescription, email, password, weddingPackage, eventPackage } = signupData;

    const formattedData = {
      businessName,
      businessDescription,
      email,
      password,
      packageDetails: {
        "Wedding Package": weddingPackage,
        "Event Package": eventPackage,
      },
    };

    const { data } = await photographerClient.post("/signup", formattedData);
    return Promise.resolve(data);
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
