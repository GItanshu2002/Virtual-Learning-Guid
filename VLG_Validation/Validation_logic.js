const AccessValidation = require("./Access_Validater");

// SignUp
const validSignupInput = async (req, res, next) => {
  try {
    const { error } = AccessValidation.valid_SignUpFormat.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    next();
  } catch (err) {
    throw err;
  }
};

// Login
const validLoginInput = async (req, res, next) => {
  try {
    const { error } = AccessValidation.valid_LoginFormat.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    next();
  } catch (err) {
    throw err;
  }
};

// forget Password
const forgetPassword = async (req, res, next) => {
  try {
    const { error } = AccessValidation.forgetPassowrd.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    next();
  } catch (err) {
    throw err;
  }
};

// Contact Us
const contactUs = async (req, res, next) => {
  try {
    const { error } = AccessValidation.contactus.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    next();
  } catch (err) {
    throw err;
  }
};

module.exports = {
  validSignupInput: validSignupInput,
  validLoginInput: validLoginInput,
  forgetPassword: forgetPassword,
  contactUs: contactUs,
};
