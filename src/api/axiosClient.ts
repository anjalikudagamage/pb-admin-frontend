import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";

// Base URLs from your .env.production
const photographerServiceBaseURL: string = "http://localhost:8082/photographer";
const bookingServiceBaseURL: string = import.meta.env.VITE_BOOKING_SERVICE_URL as string;

// Create Axios clients for both services
const photographerClient: AxiosInstance = axios.create({
  baseURL: photographerServiceBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const bookingClient: AxiosInstance = axios.create({
  baseURL: bookingServiceBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Setup interceptors
const setupInterceptors = (client: AxiosInstance) => {
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      config.timeout = 120000;

      // Ensure headers are always set to prevent type mismatches
      config.headers = config.headers || {};
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

  client.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => Promise.reject(error)
  );
};

setupInterceptors(photographerClient);
setupInterceptors(bookingClient);

export { photographerClient, bookingClient };
