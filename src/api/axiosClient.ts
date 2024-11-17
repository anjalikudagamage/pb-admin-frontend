import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

// Access the environment variable from Vite
const apiGatewayBaseURL: string =
  import.meta.env.VITE_APIGATEWAY_SERVICE_URL || "http://localhost:8060"; // Fallback to default URL if not defined

const apiClient: AxiosInstance = axios.create({
  baseURL: apiGatewayBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const setupInterceptors = (client: AxiosInstance) => {
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      config.timeout = 120000;
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
setupInterceptors(apiClient);

export { apiClient };
