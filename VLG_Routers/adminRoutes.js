const express = require("express");
const Router = express.Router();

const admincontroller = require("../VLG_controller/admin_controller");
const schema = require("../VLG_schemaModels/index");
const validation = require("../VLG_Validation/Validation_logic");

//authorization
const authorization = async (req, res, next) => {
  try {
    const get_id = await req.headers.authorization; // get user authorization token
    if (get_id) {
      const user_id = await schema.adminData.findOne({ accessToken: get_id });
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

// admin login
Router.get("/login", validation.validLoginInput, async (req, res) => {
  try {
    const login = await admincontroller.adminLogin(req.body);
    res.status(200).send(login);
  } catch (err) {
    res.status(400).send(err);
  }
});

// admin Logout
Router.get("/logout", authorization, async (req, res) => {
  try {
    let admin = req.user;
    const logout = await admincontroller.adminlogout(req.body, admin);
    res.status(200).send(logout);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Forget Password
Router.get("/forgetPassowrd", validation.forgetPassword, async (req, res) => {
  try {
    const changePassword = await admincontroller.forget_Password(req.body);
    res.status(200).send(changePassword);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit Profile
Router.get("/editProfile", authorization, async (req, res) => {
  try {
    const adminProfile = await admincontroller.editProfile(req.body);
    res.status(200).send(adminProfile);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Customer List
Router.get("/CustomerList", authorization, async (req, res) => {
  try {
    const list = await admincontroller.customerList(req.body);
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit Terms & Condtions
Router.post("/termsConditions", authorization, async (req, res) => {
  try {
    const list = await admincontroller.updateTermsConditions(req.body);
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit privacyPolicy
Router.post("/privacyPolicy", authorization, async (req, res) => {
  try {
    const list = await admincontroller.updateprivacyPolicy(req.body);
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

// category
Router.post("/bookCategory", authorization, async (req, res) => {
  try {
    const editbookCategory = await admincontroller.addEdit_category(req.body);
    res.status(200).send(editbookCategory);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add / Edit Ebook
Router.post("/addEdit_eBook", authorization, async (req, res) => {
  try {
    const addEdit_eBook = await admincontroller.addEdit_eBook(req.body);
    res.status(200).send(addEdit_eBook);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add / Edit Testimonial
Router.post("/addEdit_testimonial", authorization, async (req, res) => {
  try {
    const addEdit_Testimonial = await admincontroller.addEdit_Testimonial(
      req.body
    );
    res.status(200).send(addEdit_Testimonial);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete Testimonial
Router.get("/deletetestimonial", authorization, async (req, res) => {
  try {
    const deleting_Testimonial = await admincontroller.deleteingTestimonial(
      req.body
    );
    res.status(200).send(deleting_Testimonial);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete category
Router.get("/deletecategory", authorization, async (req, res) => {
  try {
    const deleteing_Catogery = await admincontroller.deleteingCatogery(
      req.body
    );
    res.status(200).send(deleteing_Catogery);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete ebook
Router.get("/deleteEbook", authorization, async (req, res) => {
  try {
    const deleteing_Ebook = await admincontroller.deleteingEbook(req.body);
    res.status(200).send(deleteing_Ebook);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add / Edit Highlights
Router.post("/addEdit_Highlights", authorization, async (req, res) => {
  try {
    const addEdit_Highlights = await admincontroller.addEdit_highlights(
      req.body
    );
    res.status(200).send(addEdit_Highlights);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete Highlights
Router.get("/deleteHighlights", authorization, async (req, res) => {
  try {
    const deleting_Highlights = await admincontroller.deleteingHighlights(
      req.body
    );
    res.status(200).send(deleting_Highlights);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add / Edit Blog
Router.post("/addEdit_Blog", authorization, async (req, res) => {
  try {
    const addEdit_bog = await admincontroller.addEdit_Blog(req.body);
    res.status(200).send(addEdit_bog);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete BLog
Router.get("/deleteBlog", authorization, async (req, res) => {
  try {
    const deleting_blog = await admincontroller.deleteingblog(req.body);
    res.status(200).send(deleting_blog);
  } catch (err) {
    res.status(400).send(err);
  }
});

// contactus list
Router.get("/contactuslist", authorization, async (req, res) => {
  try {
    const contactuslist = await admincontroller.contactusList(req.body);
    res.status(200).send(contactuslist);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Ask Question list
Router.post("/createQuestion", authorization, async (req, res) => {
  try {
    const askQuestionlist = await admincontroller.askQuestion(req.body);
    res.status(200).send(askQuestionlist);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Ask Question list
Router.post("/aboutUs", authorization, async (req, res) => {
  try {
    const createAboutUs = await admincontroller.aboutUs(req.body);
    res.status(200).send(createAboutUs);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Ask Question list
Router.get("/orderList", authorization, async (req, res) => {
  try {
    const orderlist = await admincontroller.orderList(req.body);
    res.status(200).send(orderlist);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = Router;
