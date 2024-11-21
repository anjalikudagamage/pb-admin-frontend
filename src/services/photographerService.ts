import { AxiosError } from "axios";
import { apiClient } from "../api/axiosClient";
interface SignupData {
  businessName: string;
  businessDescription: string;
  email: string;
  password: string;
  packageDetails: Record<string, string>;
}

interface LoginData {
  email: string;
  password: string;
}

interface UpdateData {
  id: number;
  businessName: string;
  businessDescription: string;
  email: string;
  password: string;
  packageDetails: Record<string, string>;
}

export const photographerSignupService = async (payload: SignupData) => {
  try {
    const { data } = await apiClient.post("/photographer/signup", payload);
    return data;
  } catch (error) {
    return handleServiceError(error);
  }
};

export const photographerLoginService = async (payload: LoginData) => {
  try {
    const { data } = await apiClient.post("/photographer/login", payload);
    return data;
  } catch (error) {
    return handleServiceError(error);
  }
};

export const fetchPhotographerDetailsService = async (id: number) => {
  try {
    const { data } = await apiClient.get(`/photographer/${id}/details`);
    return data;
  } catch (error) {
    return handleServiceError(error);
  }
};

export const updatePhotographerService = async (payload: UpdateData) => {
  try {
    const { data } = await apiClient.put(
      `/photographer/${payload.id}/update`,
      payload
    );
    return data;
  } catch (error) {
    return handleServiceError(error);
  }
};

const handleServiceError = (error: unknown) => {
  if (error instanceof AxiosError && error.response?.data?.message) {
    return Promise.reject(error.response.data.message);
  } else if (error instanceof Error) {
    return Promise.reject(error.message);
  }
  return Promise.reject("An unknown error occurred");
};
