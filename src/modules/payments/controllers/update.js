import Payment from "../models/index.js";

export const update = async (req, res) => {
  try {
    await Payment.update(req.body, {
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
