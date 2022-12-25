/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
import Jwt from 'jsonwebtoken';
import logger from '../app.js';

const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(' ')[1];

  Jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      logger.error(err);
      return res.status(403).send({
        success: false,
        message: 'authentication error'
      });
    }
    req.user = user;
    next();
  });
};

export default authentication;
