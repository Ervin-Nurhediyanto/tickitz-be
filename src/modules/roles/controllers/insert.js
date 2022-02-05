import Role from "../models/index.js";

export const insert = async (req, res) => {
  try {
    await Role.create(req.body);
    res.json({
      "message": "insert success"
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
