import User from "../models/index.js";

export const find = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(users[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
}
