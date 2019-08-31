const fs = require("fs");
const express = require("express");
const fetch = require("node-fetch");

const app = express();

fetch("http://dummy.restapiexample.com/api/v1/employees")
  .then(res => res.json())
  .then(body => fs.writeFileSync("./apiUser.js", body));

// app.get('/api/v1/users', (req, res) => {

// })
// app.listen(8000, (req, res) => {
//     console.log("Listening on port 8000")
// })
