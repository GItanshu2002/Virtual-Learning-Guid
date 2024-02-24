const Joi = require("joi");

// SignUp Validation
const valid_SignUpFormat = Joi.object({
  name: Joi.string().max(30).min(3).required().description("Enter your Name"),
  email: Joi.string().required().email().description("Enter your Email"),
  password: Joi.string()
    .max(30)
    .min(3)
    .required()
    .description("Enter your Password"),
});

// Login Vaidation
const valid_LoginFormat = Joi.object({
  email: Joi.string().required().email().description("Enter your Email"),
  password: Joi.string()
    .max(30)
    .min(3)
    .required()
    .description("Enter your Password"),
});

// forget password Validation
const forgetPassowrd = Joi.object({
  email: Joi.string().required().email().description("Enter your Email"),
  password: Joi.string()
    .max(30)
    .min(3)
    .required()
    .description("Enter your Password"),
});

// contact Us Validation
const contactus = Joi.object({
  email: Joi.string().required().email().description("Enter your Email"),
  name: Joi.string().required().description("Enter your Name"),
  phoneNo: Joi.string().required().description("Enter your Phone Number "),
  message: Joi.string().required().description("Enter your message"),
  questionList: Joi.string().required().description("Choose One"),
});

module.exports = {
  valid_SignUpFormat,
  valid_LoginFormat,
  forgetPassowrd,
  contactus,
};
