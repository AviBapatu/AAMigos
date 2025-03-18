import express from 'express';
import { verifyAgent, verifyToken, verifyUser } from '../middlewares/authMiddleware.js';
import { setupAgent, setupUser } from '../controllers/setupControllers.js';
const router = express.Router();

router.post('/user/setupProfile',verifyToken, verifyUser , setupUser);

router.post('/agent/setupProfile',verifyToken, verifyAgent , setupAgent);


export default router;