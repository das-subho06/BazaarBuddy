import express from 'express';
import { registerUser } from '../controller/auth.controller.js';
import { sendOTP, verifyOTP } from '../utils/twilioService.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);

export default router;
