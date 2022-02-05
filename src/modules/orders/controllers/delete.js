import Order from "../models/index.js";

export const _delete = async (req, res) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({
      "message": "delete success"
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
