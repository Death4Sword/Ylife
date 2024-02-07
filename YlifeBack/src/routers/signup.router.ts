import express from 'express';
import { signupController } from '../controllers/signup.controller';

const router = express.Router();

router.post('/api/signup', signupController);

export default router;
