import Ticket from "../models/index.js";

export const update = async (req, res) => {
  try {
    await Ticket.update(req.body, {
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
