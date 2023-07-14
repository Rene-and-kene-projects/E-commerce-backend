import Joi from "joi";

export const validateUserSignupSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .trim()
    .lowercase()
    .required(),
  password: Joi.string().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required()
});

export const validateUserLoginSchema = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required()
});

export const validateUserEmailSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .trim()
    .lowercase()
    .required()
});

export default {
  validateUserSignupSchema,
  validateUserLoginSchema,
  validateUserEmailSchema
};
