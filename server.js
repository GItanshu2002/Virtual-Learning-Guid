const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = require("./DataBase");
const adminRoute = require("./VLG_Routers/adminRoutes");
const customeRoute = require("./VLG_Routers/customerRoutes");
const adminLogin = require("./VLG_adminSetup");

app.use("/admin", adminRoute);
app.use("/customer", customeRoute);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
connection.database_connection();
adminLogin.get_adminLogin();

app.listen(5000, () => {
  console.log("Example app listening on port 5000:", 5000);
});

// websit Strecture:
// https://stackgeeks.invisionapp.com/console/share/PMV58SUJ4WR/982425829/play