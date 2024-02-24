const schema = require("../VLG_schemaModels/index");
const access_Token = require("../VLG_JsonWebToken/webToken");

// Customer SignUp
const creat_new_customer = async (payload) => {
  try {
    // Find if Email is used
    const search_for_Existing = await schema.customerData.findOne({
      email: payload.email,
    });
    if (search_for_Existing) {
      throw { msg: "Email all ready used" };
    } else {
      // creat customer
      const new_user = await schema.customerData.create(payload);

      // creat JsonWebToken
      const token = await access_Token.genrateToken({ _id: new_user._id });

      // update token in user data
      const update_userData = await schema.customerData.findOneAndUpdate(
        { _id: new_user._id },
        { accessToken: token },
        { new: true }
      );

      return update_userData;
    }
  } catch (err) {
    throw err;
  }
};

// Customer login
const customerLogin = async (payload) => {
  try {
    let to_find = {
      email: payload.email,
      password: payload.password,
      isDeleted: false,
    };
    const findCustomre = await schema.customerData.find(to_find);
    if (findCustomre.length) {
      const token = await access_Token.genrateToken({
        _id: findCustomre[0]._id,
      });
      // update token
      const update_userData = await schema.customerData.findOneAndUpdate(
        { _id: findCustomre[0]._id },
        { accessToken: token },
        { new: true }
      );
      return update_userData;
    } else {
      let message = "Customer Not Found";
      return message;
    }
  } catch (err) {
    throw err;
  }
};

// Customer Logout
const customerlogout = async (payload, customer) => {
  try {
    let lougoutcustomer = await schema.customerData.findOneAndUpdate(
      { _id: customer._id },
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
    const changePassword = await schema.customerData.findOneAndUpdate(
      { email: payload.email },
      { password: payload.password },
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
    const findCustomer = await schema.customerData.findOneAndUpdate(
      {
        email: payload.email,
        password: payload.password,
      },
      to_update,
      { new: true }
    );

    if (findCustomer) {
      return findCustomer;
    } else {
      return { msg: "Wrong Email or Password" };
    }
  } catch (err) {
    throw err;
  }
};

// Get Terms and Conditions1
const get_termsConditions = async (payload) => {
  try {
    const getList = await schema.termsConditionsSchema.find({
      isDeleted: false,
    });
    return getList;
  } catch (err) {
    throw err;
  }
};

// Get Privacy Policy
const get_privacyPolicy = async (payload) => {
  try {
    const getList = await schema.privacyPolicySchema.find({ isDeleted: false });
    return getList;
  } catch (err) {
    throw err;
  }
};

// category List
const categoryList = async (payload) => {
  try {
    const getlist = await schema.bookCategory.find({ isDeleted: false });
    return getlist;
  } catch (err) {
    throw err;
  }
};

// Ebook List
const eBookList = async (payload) => {
  try {
    let skip = 1;
    const getlist = await schema.ebookSchema
      .find({
        categoryId: payload.categoryId,
        isDeleted: false,
      })
      .skip(skip)
      .limit(1);
    return getlist;
  } catch (err) {
    throw err;
  }
};

// testimonial List
const testimonialList = async (payload) => {
  try {
    const getlist = await schema.testimonialSchema.find({
      isDeleted: false,
    });
    return getlist;
  } catch (err) {
    throw err;
  }
};

// Highlights List
const HighlightList = async (payload) => {
  try {
    const getlist = await schema.highlightSchema.find({
      isDeleted: false,
    });
    return getlist;
  } catch (err) {
    throw err;
  }
};

// customer subscription
const subscribedBooks = async (payload, customer) => {
  try {
    const wasSubscribed = await schema.subscriptionSchema.findOneAndUpdate(
      { bookId: payload.bookId, isDeleted: true },
      { isDeleted: false },
      { new: true }
    );
    if (wasSubscribed) {
      return wasSubscribed;
    }
    payload.customerId = customer._id;
    const createSubscription = await schema.subscriptionSchema.create(payload);
    return createSubscription;
  } catch (err) {
    throw err;
  }
};

// Unsubscribe Ebook
const UnsubscribeEBooks = async (payload) => {
  const Unsubscribe = await schema.subscriptionSchema.findOneAndUpdate(
    { bookId: payload.bookId, isDeleted: false },
    { isDeleted: true },
    { new: true }
  );
  return Unsubscribe;
};

//  subscribedBook List
const subscribedBooktList = async (payload) => {
  try {
    const getlist = await schema.subscriptionSchema.find({
      customerId: payload.customerId,
      isDeleted: false,
    });
    return getlist;
  } catch (err) {
    throw err;
  }
};

// blog List
const blogList = async (payload) => {
  try {
    const getlist = await schema.blogSchema.find({
      isDeleted: false,
    });
    return getlist;
  } catch (err) {
    throw err;
  }
};

// contact us
const contactus = async (payload, customer) => {
  try {
    payload.customerId = customer._id;
    const add_contact = await schema.contactSchema.create(payload);
    return add_contact;
  } catch (err) {
    throw err;
  }
};

// Question List
const QuestionList = async (payload) => {
  try {
    const getlist = await schema.askQuestionschema.find();
    return getlist;
  } catch (err) {
    throw err;
  }
};

// About VLG
const about = async (payload) => {
  try {
    const getlist = await schema.aboutusSchema.find();
    return getlist;
  } catch (err) {
    throw err;
  }
};

// Cart
const createCart = async (payload, customer) => {
  try {
    payload.customerId = customer._id;
    let addtoCart = await schema.cartSchema.create(payload);
    return addtoCart;
  } catch (err) {
    throw err;
  }
};

// Remove from Cart
const removeBook = async (payload) => {
  try {
    let findBook = await schema.cartSchema.findOneAndUpdate(
      { bookId: payload.bookId },
      { isDeleted: true },
      { new: true }
    );
    return findBook;
  } catch (err) {
    throw err;
  }
};

// view order
const order = async (payload) => {
  try {
    let bookList = await schema.cartSchema
      .find({ customerId: payload.customerId }, { isDeleted: false })
      .populate({ path: "bookId", select: "price" });
    let total_price = 0;
    for (let data of bookList) {
      total_price += data.bookId.price;
    }
    return {
      bookList,
      total_price: total_price,
    };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  creat_new_customer,
  customerLogin,
  customerlogout,
  forget_Password,
  editProfile,

  get_privacyPolicy,
  get_termsConditions,

  categoryList,
  eBookList,
  testimonialList,
  HighlightList,

  subscribedBooks,
  UnsubscribeEBooks,
  subscribedBooktList,
  blogList,

  contactus,
  QuestionList,

  about,

  createCart,
  removeBook,
  order,
};
