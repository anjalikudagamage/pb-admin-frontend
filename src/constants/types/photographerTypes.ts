export interface SignupPayload {
  businessName: string;
  businessDescription: string;
  email: string;
  password: string;
  packageDetails: Record<string, string>;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface UpdatePayload {
  id: number;
  businessName: string;
  businessDescription: string;
  email: string;
  password: string;
  packageDetails: Record<string, string>;
}

export interface PhotographerDetails {
  businessName: string;
  businessDescription: string;
  packages: {
    name: string;
    details: {
      photos: number;
      hours: number;
      locations: number;
      price: number;
    };
  }[];
}

export interface PhotographerState {
  isLoading: boolean;
  isPhotographerAuthenticated: boolean;
  error: string | null;
  user: {
    id: number;
    email: string;
    password?: string;
  } | null;
  photographerDetails: PhotographerDetails | null;
}
