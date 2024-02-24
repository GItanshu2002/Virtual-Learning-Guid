const aboutusSchema = require("./aboutUs");
const customerData = require("./customerSchema");
const subscriptionSchema = require("./subscriptionSchema");
const adminData = require("./adminSchema");
const termsConditionsSchema = require("./terms&condtion");
const privacyPolicySchema = require("./privacyPolicy");
const bookCategory = require("./bookCategory");
const ebookSchema = require("./ebookSchema");
const testimonialSchema = require("./testimonialSchema");
const highlightSchema = require("./highlightSchema.js");
const blogSchema = require("./blogSchema.js");
const contactSchema = require("./contactSchema");
const askQuestionschema = require("./askQuestion");
const cartSchema = require("./cartSchema");

module.exports = {
  adminData: adminData,
  customerData: customerData,
  termsConditionsSchema: termsConditionsSchema,
  privacyPolicySchema: privacyPolicySchema,
  bookCategory: bookCategory,
  ebookSchema: ebookSchema,
  testimonialSchema: testimonialSchema,
  highlightSchema: highlightSchema,
  subscriptionSchema: subscriptionSchema,
  blogSchema: blogSchema,
  contactSchema: contactSchema,
  askQuestionschema: askQuestionschema,
  aboutusSchema: aboutusSchema,
  cartSchema: cartSchema,
};
