import axios from "axios";

// Base URLs from your .env.production
const photographerServiceBaseURL: string = "http://localhost:8082/photographer";
const bookingServiceBaseURL: string = import.meta.env.VITE_BOOKING_SERVICE_URL as string;

// Create Axios clients for both services
const photographerClient = axios.create({
  baseURL: photographerServiceBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const bookingClient = axios.create({
  baseURL: bookingServiceBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Setup interceptors
const setupInterceptors = (client: any) => {
  client.interceptors.request.use(
    (config: { timeout: number }) => {
      config.timeout = 120000;
      return config;
    },
    (error: any) => Promise.reject(error)
  );

  client.interceptors.response.use(
    (response: any) => response,
    (error: any) => Promise.reject(error)
  );
};

setupInterceptors(photographerClient);
setupInterceptors(bookingClient);

export { photographerClient, bookingClient };
