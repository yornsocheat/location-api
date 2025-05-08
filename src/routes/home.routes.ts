import { Router } from 'express';

const router = Router();

// Home route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Location API' });
});

router.get('/health', (_, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

export default router;
