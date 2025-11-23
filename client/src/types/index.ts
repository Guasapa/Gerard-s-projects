// Common types for the application

export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Example {
  id: number;
  name: string;
  description: string;
}

export interface ApiError {
  message: string;
  statusCode: number;
  stack?: string;
}
