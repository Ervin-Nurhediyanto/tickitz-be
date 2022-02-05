import Ticket from "../models/index.js";

export const find = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(tickets[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
}
