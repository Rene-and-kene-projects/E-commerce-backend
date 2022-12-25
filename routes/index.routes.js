/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import express from 'express';
import userRouter from './user.routes.js';

const router = express.Router();

router.use('/users', userRouter);

export default router;
