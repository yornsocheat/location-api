import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { AppErrorClass, errorHandler } from './utils/errorHandler';
import locationRoutes from './routes/location.routes';
import homeRoutes from './routes/home.routes';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/', homeRoutes);
app.use('/api/locations', locationRoutes);

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
