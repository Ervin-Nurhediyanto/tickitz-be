import Payment from "../models/index.js";

export const find = async (req, res) => {
  try {
    const payments = await Payment.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(payments[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
}
