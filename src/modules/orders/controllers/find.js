import Order from "../models/index.js";

export const find = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(orders[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
}
