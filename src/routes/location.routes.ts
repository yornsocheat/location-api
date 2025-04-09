import { Router } from 'express';
import { catchAsync } from '../utils/errorHandler';
import { AppErrorClass } from '../utils/errorHandler';

const router = Router();

// Sample location route with error handling
router.get(
  '/',
  catchAsync(async (req, res) => {
    // Simulate an error for demonstration
    if (req.query.error) {
      throw new AppErrorClass('Simulated error occurred', 400);
    }

    res.json({
      locations: [
        { id: 1, name: 'New York', coordinates: { lat: 40.7128, lng: -74.006 } },
        { id: 2, name: 'London', coordinates: { lat: 51.5074, lng: -0.1278 } },
        { id: 3, name: 'Tokyo', coordinates: { lat: 35.6762, lng: 139.6503 } },
      ],
    });
  })
);

export default router;
