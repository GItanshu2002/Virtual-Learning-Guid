const express = require("express");
const Router = express.Router();

const customerController = require("../VLG_controller/customerController");
const validation = require("../VLG_Validation/Validation_logic");
const schema = require("../VLG_schemaModels/index");

//authorization
const authorization = async (req, res, next) => {
  try {
    const get_id = await req.headers.authorization; // get user authorization token
    if (get_id) {
      const user_id = await schema.customerData.findOne({
        accessToken: get_id,
      });
      if (user_id) {
        req.user = user_id;
        next();
      } else {
        res.status(400).send("Unauthorize user");
      }
    } else {
      res.status(400).send("Authorization required");
    }
  } catch (err) {
    throw err;
  }
};

// SignUp Route
Router.post("/signup", validation.validSignupInput, async (req, res) => {
  try {
    const signup = await customerController.creat_new_customer(req.body);
    res.status(200).send(signup);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login Route
Router.get("/login", validation.validLoginInput, async (req, res) => {
  try {
    const login = await customerController.customerLogin(req.body);
    res.status(200).send(login);
  } catch (err) {
    res.status(400).send(err);
  }
});

// customer Logout
Router.get("/logout", authorization, async (req, res) => {
  try {
    let customer = req.user;
    const logout = await customerController.customerlogout(req.body, customer);
    res.status(200).send(logout);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Forget Password
Router.get("/forgetPassowrd", validation.forgetPassword, async (req, res) => {
  try {
    const changePassword = await customerController.forget_Password(req.body);
    res.status(200).send(changePassword);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit Profile
Router.get("/editProfile", async (req, res) => {
  try {
    const customerProfile = await customerController.editProfile(req.body);
    res.status(200).send(customerProfile);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Terms & Condtions
Router.get("/termsConditions", async (req, res) => {
  try {
    const list = await customerController.get_termsConditions(req.body);
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

// privacyPolicy
Router.get("/privacyPolicy", async (req, res) => {
  try {
    const list = await customerController.get_privacyPolicy(req.body);
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Category List
Router.get("/categoryList", async (req, res) => {
  try {
    const list = await customerController.categoryList(req.body);
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Ebook List
Router.get("/eBookList", async (req, res) => {
  try {
    const list = await customerController.eBookList(req.body);
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

// testimonial List
Router.get("/testimonialList", async (req, res) => {
  try {
    const list = await customerController.testimonialList(req.body);
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Highlights List
Router.get("/highlightsList", async (req, res) => {
  try {
    const list = await customerController.HighlightList(req.body);
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

// subscribedBooks
Router.post("/subscribeBook", authorization, async (req, res) => {
  try {
    let customer = req.user;
    const subscribeBook = await customerController.subscribedBooks(
      req,
      customer
    );
    res.status(200).send(subscribeBook);
  } catch (err) {
    res.status(400).send(err);
  }
});

// UnsubscribedBooks
Router.get("/UnsubscribeBook", authorization, async (req, res) => {
  try {
    const UnsubscribeBook = await customerController.UnsubscribeEBooks(
      req.body
    );
    res.status(200).send(UnsubscribeBook);
  } catch (err) {
    res.status(400).send(err);
  }
});

// subscribedBook List
Router.get("/subscribedBooklist", authorization, async (req, res) => {
  try {
    const list = await customerController.subscribedBooktList(req.body);
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

// blog List
Router.get("/bloglist", async (req, res) => {
  try {
    const list = await customerController.blogList(req.body);
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

// contact us
Router.post(
  "/contactus",
  validation.contactUs,
  authorization,
  async (req, res) => {
    try {
      let customer = req.user;
      const contact = await customerController.contactus(req, customer);
      res.status(200).send(contact);
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

// ask Question List
Router.get("/askQuestionList", async (req, res) => {
  try {
    const QuestionList = await customerController.QuestionList(req.body);
    res.status(200).send(QuestionList);
  } catch (err) {
    res.status(400).send(err);
  }
});

// about Vlg
Router.get("/about", async (req, res) => {
  try {
    const about = await customerController.about(req.body);
    res.status(200).send(about);
  } catch (err) {
    res.status(400).send(err);
  }
});

// cart
Router.post("/cart", authorization, async (req, res) => {
  try {
    let customer = req.user;
    const cart = await customerController.createCart(req, customer);
    res.status(200).send(cart);
  } catch (err) {
    res.status(400).send(err);
  }
});

// remove Book from cart
Router.get("/removeBook", authorization, async (req, res) => {
  try {
    const removeBook = await customerController.removeBook(req.body);
    res.status(200).send(removeBook);
  } catch (err) {
    res.status(400).send(err);
  }
});

// view order with total prise
Router.get("/order", authorization, async (req, res) => {
  try {
    const list = await customerController.order(req.body);
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = Router;

// admin signup
