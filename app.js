const fs = require("fs");
const express = require("express");
const fetch = require("node-fetch");

const app = express();

fetch("http://dummy.restapiexample.com/api/v1/employees")
  .then(res => res.json())
  .then(body => fs.writeFileSync("./apiUser.js", JSON.stringify(body)));

const users = fs.readFileSync(`${__dirname}/apiUser.js`, "utf-8");

app.get("/api/v1/users", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      users
    }
  });
});
app.listen(8000, () => {
  console.log("App running on port 8000");
});
