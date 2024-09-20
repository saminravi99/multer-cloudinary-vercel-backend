/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';

const app: Application = express();

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

//Testing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Lost And Found API',
  });
});

//global error handler
app.use(globalErrorHandler);

//handle not found
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(404).json({
//     success: false,
//     message: 'Resource not found',
//   });
// });

export default app;
