import express from 'express';
import userRouter from './user.routes.js';

const router = express.Router();

router.use('/users', userRouter);

export default router;
