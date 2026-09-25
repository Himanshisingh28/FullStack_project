import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { validate } from '../middleware/validate.js'
import { loginSchema, registerSchema } from '../Validators/authValidator.js';

const router = express.Router();

router.post('/login', validate(loginSchema), loginUser);
router.post('/register', validate(registerSchema), registerUser);

export default router