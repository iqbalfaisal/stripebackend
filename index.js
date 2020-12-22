const express = require("express");

const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Empty");
});

app.post("/allCoupons", (req, res) => {
  return stripe.coupons
    .list({})
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

app.post("/deleteCoupon", (req, res) => {
  const { product } = req.body;
  return stripe.coupons
    .del(product)
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

app.post("/createCoupon", (req, res) => {
  return stripe.coupons
    .create({ ...req.body })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

app.listen(8282, () => console.log("8282 port listening"));
