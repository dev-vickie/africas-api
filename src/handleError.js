const { validationResult } = require('express-validator');
 const handleErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty) {
    res.status(400).errors(errors.array());
  } else {
    next();
  }
};

module.exports = { handleErrors };