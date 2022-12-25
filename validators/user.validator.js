import Joi from 'joi';

export const validateUserSignupSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).trim()
    .lowercase()
    .required(),
  username: Joi.string().required().max(15),
  password: Joi.string().required()
});

export const validateUserLoginSchema = Joi.object().keys({
  username: Joi.string().required().max(15),
  password: Joi.string().required()
});

export const validateUserEmailSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).trim()
    .lowercase()
    .required()
});

export default {
  validateUserSignupSchema,
  validateUserLoginSchema,
  validateUserEmailSchema
};
