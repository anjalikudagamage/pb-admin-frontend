import { AxiosError } from "axios";
import { photographerClient } from "../api/axiosClient";

interface SignupData {
  businessName: string;
  businessDescription: string;
  email: string;
  password: string;
  packageDetails: {
    [key: string]: string;
  };
}

interface LoginData {
  email: string;
  password: string;
}

export const photographerSignupService = async (signupData: SignupData) => {
  try {
    const response = await photographerClient.post("/signup", signupData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error.response?.data?.message || "Signup failed");
    }
    return Promise.reject("An unknown error occurred during signup");
  }
};

export const photographerLoginService = async (loginData: LoginData) => {
  try {
    const response = await photographerClient.post("/login", loginData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error.response?.data?.message || "Login failedd");
    }
    return Promise.reject("An unknown error occurred during login");
  }
};

export const fetchPhotographerDetailsService = async (id: number) => {
  try {
    const response = await photographerClient.get(`/${id}/details`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error.response?.data?.message || "Failed to fetch details");
    }
    return Promise.reject("An unknown error occurred while fetching details");
  }
};
