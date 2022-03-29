import { Request, Response, NextFunction } from 'express';

const error = (err: any, _req: Request, res: Response, _next: NextFunction): Response<string> => {
  if (err.isJoi) {
    return res.status(400).json({ message: err.details[0].message });
  }
  console.error(err);
  return res.status(500).json({ message: 'Internal server error' });
};

export default error;