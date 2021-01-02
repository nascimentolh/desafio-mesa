import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import routes from './routes';
import '../typeorm';
import AppError from '@shared/errors/AppError';
import '@shared/container';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({ error: 'error', message: err });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('Server Started');
});
