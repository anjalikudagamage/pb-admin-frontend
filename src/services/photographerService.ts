import { AxiosError } from "axios";
import { apiClient } from "../api/axiosClient";
import {
  SignupPayload,
  LoginPayload,
  PhotographerDetails,
  UpdatePayload,
} from "../constants/types/photographerTypes";

export const photographerSignupService = async (signupData: SignupPayload) => {
  try {
    const { data } = await apiClient.post("/photographer/signup", signupData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Signup failed";
    }
    throw "An unknown error occurred during signup";
  }
};

export const photographerLoginService = async (loginData: LoginPayload) => {
  try {
    const { data } = await apiClient.post("/photographer/login", loginData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Login failed";
    }
    throw "An unknown error occurred during login";
  }
};

export const fetchPhotographerDetailsService = async (
  id: number
): Promise<PhotographerDetails> => {
  try {
    const { data } = await apiClient.get(`/photographer/${id}/details`);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Failed to fetch details";
    }
    throw "An unknown error occurred while fetching details";
  }
};

export const updatePhotographerService = async (
  updateData: UpdatePayload
): Promise<PhotographerDetails> => {
  try {
    const { data } = await apiClient.put(
      `/photographer/${updateData.id}/update`,
      updateData
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Failed to update photographer";
    }
    throw "An unknown error occurred while updating photographer details";
  }
};
