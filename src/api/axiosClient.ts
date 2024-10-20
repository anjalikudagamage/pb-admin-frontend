import axios from "axios";

// Base URLs from your .env.production
const photographerServiceBaseURL: string = import.meta.env.VITE_PHOTOGRAPHER_SERVICE_URL as string;
const bookingServiceBaseURL: string = import.meta.env.VITE_BOOKING_SERVICE_URL as string;

// Create an Axios instance for Photographer Service
const photographerClient = axios.create({
  baseURL: photographerServiceBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Create an Axios instance for Booking Service
const bookingClient = axios.create({
  baseURL: bookingServiceBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Setting up interceptors
const setupInterceptors = (client: any) => {
  client.interceptors.request.use(
    async (config: { timeout: number; }) => {
      config.timeout = 120000; // Timeout of 2 minutes
      return config;
    },
    (error: any) => Promise.reject(error)
  );

  client.interceptors.response.use(
    (response: any) => response,
    async (error: { config: any; response: { status: number; }; }) => {
      const prevRequest = error?.config;
      if (error?.response?.status === 401 && !prevRequest?.sent) {
        prevRequest.sent = true;
        return client(prevRequest);
      }
      return Promise.reject(error);
    }
  );
};

// Setup interceptors for both clients
setupInterceptors(photographerClient);
setupInterceptors(bookingClient);

// Exporting clients
export { photographerClient, bookingClient };


