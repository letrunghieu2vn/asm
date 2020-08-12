const express = require("express");
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://letrunghieu2vn:hoangvanhung3vn@cluster0.p95e2.mongodb.net/test";
router.get("/", (req, res) => {
  res.render("login");
});
router.post("/", async (req, res) => {
  let un = req.body.un;
  let pass = req.body.pass;
  if (un == "admin" && pass == "admin") {
    let client = await MongoClient.connect(url);
    let dbo = client.db("storeman");

    let results = await dbo.collection("product").find({}).toArray();
    var fullUrl = req.protocol + "://" + req.get("host") + "/product";
    res.redirect(fullUrl);
  } else {
    res.end("Login failed!");
  }
});
module.exports = router;
