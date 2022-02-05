import Movie from "../models/index.js";

export const insert = async (req, res) => {
  const { title, director, category, cast, synopsis, releaseDate, duration } = req.body
  try {
    const data = {
      title,
      director,
      category,
      cast,
      synopsis,
      releaseDate,
      duration
    }

    if (req.file) {
      data.image = process.env.BASE_URL + 'uploads/' + req.file.filename
    }
    await Movie.create(data);
    res.json({
      "message": "insert success"
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
