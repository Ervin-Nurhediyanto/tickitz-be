import Order from "../models/index.js";

export const update = async (req, res) => {
  try {
    await Order.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json({
      "message": "update success"
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
