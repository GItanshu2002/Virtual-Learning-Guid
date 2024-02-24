const accessToken = require("jsonwebtoken");
const secreatKey = "thesecreatKeyis9876543210";
const genrateToken = async function genrating_Token(data) {
  const token = await accessToken.sign(data, secreatKey);
  return token;
};

module.exports = {
  genrateToken,
};
