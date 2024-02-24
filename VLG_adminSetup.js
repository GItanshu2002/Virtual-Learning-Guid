const adminData = require("./VLG_schemaModels/adminSchema");

const get_adminLogin = async (req, res) => {
  const admin_avilabel = await adminData.findOne({ email: "admin@gmail.com" });
  if (admin_avilabel) {
    return admin_avilabel;
  } else {
    let admin_details = [
      {
        name: "admin",
        email: "admin@gmail.com",
        password: "1234",
      },
      {
        name: "admin1",
        email: "admin1@gmail.com",
        password: "1234",
      },
    ];
    const saveAdmin = await adminData.create(admin_details);
    return saveAdmin;
  }
};

module.exports = {
  get_adminLogin,
};
