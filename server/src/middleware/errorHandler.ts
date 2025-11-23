import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error('Error:', err.message);
  console.error('Stack:', err.stack);

  // In production, send generic error message to avoid exposing internal details
  const isDevelopment = process.env.NODE_ENV === 'development';
  const message = isDevelopment ? err.message : 'Internal Server Error';

  res.status(500).json({
    success: false,
    message,
    ...(isDevelopment && { stack: err.stack }),
  });
};
