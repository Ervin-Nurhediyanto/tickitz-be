import Location from "../models/index.js";

export const find = async (req, res) => {
  try {
    const locations = await Location.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(locations[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
}
