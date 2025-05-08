import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { AppErrorClass, errorHandler } from './utils/errorHandler';
import locationRoutes from './routes/location.routes';
import homeRoutes from './routes/home.routes';
import userRoutes from './routes/user.routes';

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
app.use('/api/locations', locationRoutes);
app.use('/api/users', userRoutes);

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
