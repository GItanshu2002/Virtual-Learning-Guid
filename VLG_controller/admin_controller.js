const access_Token = require("../VLG_JsonWebToken/webToken");
const schema = require("../VLG_schemaModels/index");

// admin login
const adminLogin = async (payload) => {
  try {
    let to_find = {
      email: payload.email,
      password: payload.password,
    };
    const findadmin = await schema.adminData.findOne(to_find);
    if (findadmin) {
      const token = await access_Token.genrateToken({ _id: findadmin._id });
      const update_userData = await schema.adminData.findOneAndUpdate(
        { _id: findadmin._id },
        { accessToken: token },
        { new: true }
      );
      return update_userData;
    } else {
      throw { msg: "!  Access Denied Only for Admin  !" };
    }
  } catch (err) {
    throw err;
  }
};

//  logout

const adminlogout = async (payload, admin) => {
  try {
    let lougoutAdmin = await schema.adminData.findOneAndUpdate(
      { _id: admin._id },
      { accessToken: null },
      { new: true }
    );
    return { msg: "Logout Succesfull" };
  } catch (err) {
    throw err;
  }
};

// Forget Password
const forget_Password = async (payload) => {
  try {
    const changePassword = await schema.adminData.findOneAndUpdate(
      { email: payload.email },
      { password: payload.newPassword },
      { new: true }
    );
    if (changePassword) {
      return changePassword;
    } else {
      return { msg: "Invalid Email" };
    }
  } catch (err) {
    throw err;
  }
};

// Edit Profile
const editProfile = async (payload) => {
  try {
    let to_update = {
      email: payload.newEmail,
      name: payload.newName,
      password: payload.newPassword,
    };
    const findadmin = await schema.adminData.findOneAndUpdate(
      {
        email: payload.email,
        password: payload.password,
      },
      to_update,
      { new: true }
    );

    if (findadmin) {
      return findadmin;
    } else {
      return { msg: "Wrong Email or Password" };
    }
  } catch (err) {
    throw err;
  }
};

// Get customer list
const customerList = async (payload) => {
  try {
    const getList = await schema.customerData.find();
    return getList;
  } catch (err) {
    throw err;
  }
};

// Terms & Condtions
const updateTermsConditions = async (payload) => {
  try {
    const fetchTermsconditions = await schema.termsConditionsSchema.findOne({
      isDeleted: false,
    });
    if (fetchTermsconditions) {
      const TermsConditions_updated =
        await schema.termsConditionsSchema.findOneAndUpdate(
          { isDeleted: false },
          { termsConditions: payload.termsConditions },
          { new: true }
        );
      return TermsConditions_updated;
    } else {
      const createTermasConditions = await schema.termsConditionsSchema.create(
        payload
      );
      return createTermasConditions;
    }
  } catch (err) {
    throw err;
  }
};

// Privacy Policy
const updateprivacyPolicy = async (payload) => {
  try {
    const fetchprivacyPolicy = await schema.privacyPolicySchema.findOne({
      isDeleted: false,
    });
    if (fetchprivacyPolicy) {
      const privacyPolicy_updated =
        await schema.privacyPolicySchema.findOneAndUpdate(
          { isDeleted: false },
          { privacyPolicy: payload.privacyPolicy },
          { new: true }
        );
      return privacyPolicy_updated;
    } else {
      const createprivacyPolicy = await schema.privacyPolicySchema.create(
        payload
      );
      return createprivacyPolicy;
    }
  } catch (err) {
    throw err;
  }
};

// Edit / Add Book Category
const addEdit_category = async (payload) => {
  try {
    to_Edit = {
      category: payload.category,
      discription: payload.discription,
      isDeleted: payload.isDeleted,
    };
    const existingCategory = await schema.bookCategory.findOneAndUpdate(
      { _id: payload._id },
      to_Edit,
      { new: true }
    );
    if (!existingCategory) {
      const creatCategory = await schema.bookCategory.create(payload);
      return creatCategory;
    }
    return existingCategory;
  } catch (err) {
    throw err;
  }
};

// Delete Category

const deleteingCatogery = async (payload) => {
  try {
    const deletingcatogery = await schema.bookCategory.findOneAndUpdate(
      { _id: payload._id },
      { isDeleted: true }
    );
    return { msg: "Deleted" };
  } catch (err) {
    throw err;
  }
};

// Add Edit Ebook
const addEdit_eBook = async (payload) => {
  try {
    to_update = {
      eBook: payload.eBook,
      discription: payload.discription,
      categoryId: payload.categoryId,
      isDeleted: payload.isDeleted,
      image: payload.image,
      price: payload.price,
    };
    const editbook = await schema.ebookSchema.findOneAndUpdate(
      { _id: payload._id },
      to_update,
      { new: true }
    );
    if (editbook) {
      return editbook;
    } else {
      const addBook = await schema.ebookSchema.create(payload);
      return addBook;
    }
  } catch (err) {
    throw err;
  }
};

// Delete ebook
const deleteingEbook = async (payload) => {
  try {
    const deletingebook = await schema.ebookSchema.findOneAndUpdate(
      { _id: payload._id },
      { isDeleted: true }
    );
    return { msg: "Deleted" };
  } catch (err) {
    throw err;
  }
};

// Testimonial
const addEdit_Testimonial = async (payload) => {
  try {
    to_update = {
      name: payload.name,
      designation: payload.designation,
      statment: payload.statment,
      isDeleted: payload.isDeleted,
      rating: payload.rating,
    };
    const Edit_Testimonial = await schema.testimonialSchema.findOneAndUpdate(
      { _id: payload._id },
      to_update,
      { new: true }
    );
    if (Edit_Testimonial) {
      return Edit_Testimonial;
    } else {
      const add_Testimonial = await schema.testimonialSchema.create(payload);
      return add_Testimonial;
    }
  } catch (err) {
    throw err;
  }
};

// Delete Testimonial
const deleteingTestimonial = async (payload) => {
  try {
    const deletingtestimonial = await schema.testimonialSchema.findOneAndUpdate(
      { _id: payload._id },
      { isDeleted: true }
    );
    return { msg: "Deleted" };
  } catch (err) {
    throw err;
  }
};

// Highlights
const addEdit_highlights = async (payload) => {
  try {
    to_update = {
      image: payload.name,
      heading: payload.designation,
      discription: payload.statment,
      isDeleted: payload.isDeleted,
    };
    const Edit_Highlights = await schema.highlightSchema.findOneAndUpdate(
      { _id: payload._id },
      to_update,
      { new: true }
    );
    if (Edit_Highlights) {
      return Edit_Highlights;
    } else {
      const add_Highlights = await schema.highlightSchema.create(payload);
      return add_Highlights;
    }
  } catch (err) {
    throw err;
  }
};

// Delete Highlights
const deleteingHighlights = async (payload) => {
  try {
    const deletingHighlights = await schema.highlightSchema.findOneAndUpdate(
      { _id: payload._id },
      { isDeleted: true }
    );
    return { msg: "Deleted" };
  } catch (err) {
    throw err;
  }
};

// add/ Edit Blog
const addEdit_Blog = async (payload) => {
  try {
    to_update = {
      image: payload.name,
      heading: payload.designation,
      discription: payload.statment,
      isDeleted: payload.isDeleted,
    };
    const Edit_blog = await schema.blogSchema.findOneAndUpdate(
      { _id: payload._id },
      to_update,
      { new: true }
    );
    if (Edit_blog) {
      return Edit_blog;
    } else {
      const add_blog = await schema.blogSchema.create(payload);
      return add_blog;
    }
  } catch (err) {
    throw err;
  }
};

// Delete blog
const deleteingblog = async (payload) => {
  try {
    const deletingblog = await schema.blogSchema.findOneAndUpdate(
      { _id: payload._id },
      { isDeleted: true }
    );
    return { msg: "Deleted" };
  } catch (err) {
    throw err;
  }
};

//  contact req List
const contactusList = async (payload) => {
  try {
    const getlist = await schema.contactSchema.find({
      customerId: payload.customerId,
      isDeleted: false,
    });
    return getlist;
  } catch (err) {
    throw err;
  }
};

//  Ask Question List
const askQuestion = async (payload) => {
  try {
    const getlist = await schema.askQuestionschema.create(payload);
    return getlist;
  } catch (err) {
    throw err;
  }
};

//  About us List
const aboutUs = async (payload) => {
  try {
    const createAboutUs = await schema.aboutusSchema.create(payload);
    return createAboutUs;
  } catch (err) {
    throw err;
  }
};

// order list

const orderList = async (payload) => {
  try {
    let limit = 1;
    let list = await schema.cartSchema
      .find({ customerId: payload.customerId })
      .limit(limit)
      .skip(payload.skip);
    let sortedList = list.sort();
    return sortedList;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  adminLogin,
  adminlogout,
  forget_Password,

  editProfile,
  customerList,

  updateTermsConditions,
  updateprivacyPolicy,

  addEdit_category,
  addEdit_eBook,
  addEdit_Testimonial,
  addEdit_highlights,
  addEdit_Blog,

  deleteingEbook,
  deleteingCatogery,
  deleteingTestimonial,
  deleteingHighlights,
  deleteingblog,

  contactusList,
  askQuestion,
  aboutUs,
  orderList,
};
