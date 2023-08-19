import { json } from "@sveltejs/kit";

export interface IResponseApi<T> {
  status: number;
  data: T;
  error: boolean;
  message: string;
}

// Function to generate JSON responses with consistent structure
export function apiResponse(status: number, data: any, message: string, error: boolean) {
  const response: IResponseApi<any> = {
    status,
    data,
    error,
    message,
  };
  return json(response);
}