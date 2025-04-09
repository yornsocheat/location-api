import { Router } from 'express';

const router = Router();

// Home route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Location API' });
});

export default router;
