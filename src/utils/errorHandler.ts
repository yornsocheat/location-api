import { Request, Response, NextFunction } from 'express';
import { AppError, ErrorResponse } from '../types/error';

export class AppErrorClass extends Error implements AppError {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (err: AppError, req: Request, res: Response) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  const errorResponse: ErrorResponse = {
    status: err.status,
    message: err.message,
  };

  // Only include stack trace in development
  if (process.env.NODE_ENV === 'development') {
    errorResponse.stack = err.stack;
  }

  res.status(err.statusCode).json(errorResponse);
};

export const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
