export interface AppError extends Error {
  statusCode?: number;
  status?: string;
  isOperational?: boolean;
}

export interface ErrorResponse {
  status: string;
  message: string;
  stack?: string;
}
