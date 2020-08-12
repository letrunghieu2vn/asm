const express = require("express");
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;
var url ="mongodb+srv://letrunghieu2vn:hoangvanhung3vn@cluster0.p95e2.mongodb.net/test";

router.get("/", async (req, res) => {
  let client = await MongoClient.connect(url);
  let dbo = client.db("storeman");

  
  let results = await dbo.collection("product").find({}).toArray();
  res.render("index", { product: results });
});

module.exports = router;
