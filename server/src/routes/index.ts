import { Router } from 'express';
import userRoutes from './userRoutes';
// Import other route modules here

const router = Router();

// Mount route modules
router.use('/users', userRoutes);
// Add more routes here
// router.use('/auth', authRoutes);
// router.use('/products', productRoutes);

export default router;
