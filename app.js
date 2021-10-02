const express = require("express");
const morgan = require("morgan");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });
// if (process.env.NODE_ENV === "development") {
//   morgan("dev");
// }

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/signup.html`);
});

app.post("/", (req, res) => {
  const { firstName, lastName, email } = req.body;
  res.send("Data submitted");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
