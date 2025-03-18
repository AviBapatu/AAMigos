import express from 'express';
import authRoutes from './auth.js';
import setupRoutes from './setup.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/setup' , setupRoutes)

export default router;