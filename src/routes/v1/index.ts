import { Router } from 'express';
import locationRoutes from './location.routes';
import userRoutes from './user.routes';

const router = Router();

router.use('/locations', locationRoutes);
router.use('/users', userRoutes);

export default router;
