import logger from "../app.js";

const validator =
  (schema, reqbody = "body") =>
  async (req, res, next) => {
    const validated = await schema.validateAsync(req.body);
    try {
      if (reqbody === "body") {
        req.body = validated;
      } else {
        req.query = validated;
      }
      next();
    } catch (e) {
      logger.error(e)
      return res.status(500).send({
        success: false,
        message: e.message
      });
    }
  };

export default validator;
