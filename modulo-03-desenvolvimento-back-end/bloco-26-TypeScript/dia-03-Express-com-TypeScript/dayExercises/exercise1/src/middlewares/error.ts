import { Request, Response, NextFunction } from 'express';

const error = (err: any, req: Request, res: Response, next: NextFunction): Response<string> => {
  console.error(err);
  return res.status(500).json({ message: 'Internal server error' });
};

export default error;