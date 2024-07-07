const validator = require('../helpers/validate');

const userValidation = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    email: 'required|email',
    phone: 'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  userValidation
};