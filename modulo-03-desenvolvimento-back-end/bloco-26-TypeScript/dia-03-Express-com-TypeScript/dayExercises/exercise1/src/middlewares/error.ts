import { Request, Response, NextFunction } from 'express';

const error = (err: any, _req: Request, res: Response, _next: NextFunction): Response<string> => {
  console.error(err);
  return res.status(500).json({ message: 'Internal server error' });
};

export default error;