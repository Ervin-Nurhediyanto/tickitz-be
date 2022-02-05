import Role from "../models/index.js";

export const find = async (req, res) => {
  try {
    const roles = await Role.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(roles[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
}
