import Order from "../models/index.js";

export const insert = async (req, res) => {
  try {
    await Order.create(req.body);
    res.json({
      "message": "insert success"
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
