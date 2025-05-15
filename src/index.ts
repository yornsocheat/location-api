import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { AppErrorClass, errorHandler } from './utils/errorHandler';
import homeRoutes from './routes/home.routes';
import v1Routes from './routes/v1';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Logging middleware
app.use(morgan('dev')); // Logs HTTP requests in development format

// Routes
app.use('/', homeRoutes);
app.use('/v1', v1Routes);

// 404 handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new AppErrorClass(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
