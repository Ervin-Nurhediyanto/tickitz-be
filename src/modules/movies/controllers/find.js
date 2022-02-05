import Movie from "../models/index.js";

export const find = async (req, res) => {
  try {
    const movies = await Movie.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(movies[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
}
