import Ticket from "../models/index.js";

export const insert = async (req, res) => {
  try {
    await Ticket.create(req.body);
    res.json({
      "message": "insert success"
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
