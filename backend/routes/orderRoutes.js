const express = require("express")
const router = express.Router()

const Order = require("../models/Order")

// GET all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find()
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" })
  }
})

module.exports = router