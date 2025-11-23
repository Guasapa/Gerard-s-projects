// Authentication routes placeholder
// TODO: Connect auth routes to main app

import { Router } from 'express';
import { authController } from './authController';
import { authenticate } from './middleware';

const router = Router();

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected routes
router.get('/me', authenticate, authController.getCurrentUser);
router.post('/logout', authenticate, authController.logout);

export default router;
