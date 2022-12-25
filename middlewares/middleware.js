/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from '../routes/index.routes.js';
import database from '../config/db.config.js';
import errorHandler from './error.middleware.js';

const middleware = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(router);
  database();
  app.use('*', (req, res) => {
    res.status(200).send('Server is Running Check API docs');
  });
  app.use(errorHandler);
};

export default middleware;
