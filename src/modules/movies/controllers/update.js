import Movie from "../models/index.js";

export const update = async (req, res) => {
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
    await Movie.update(data, {
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
