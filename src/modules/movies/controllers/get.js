import Movie from "../models/index.js";
import { Op } from "sequelize";

export const get = async (req, res) => {
  const { limit, page, title, director, category, cast, synopsis, releaseDate } = req.query

  const oneDay = 1000 * 60 * 60 * 24
  const startedDate = new Date(`${releaseDate} 00:00:00`).getTime() - (30 * oneDay)

  let filter = {
    limit: limit ? Number(limit) : null,
    offset: page ? Number(limit * (page - 1)) : 0,
    title: title ? title : '',
    director: director ? director : '',
    category: category ? category : '',
    cast: cast ? cast : '',
    synopsis: synopsis ? synopsis : '',
    // Release Date
    startedDate: releaseDate ? new Date(startedDate) :  new Date("1900-01-01 00:00:00"),
    endDate: releaseDate ? new Date(`${releaseDate} 23:59:59`) : new Date("9999-12-12 23:59:59")
  }

  try {
    const movies = await Movie.findAndCountAll({
      limit: filter.limit,
      offset: filter.offset,
      where: {
        title: { [Op.like]: `%` + filter.title +`%` },
        director: { [Op.like]: `%` + filter.director +`%` },
        category: { [Op.like]: `%` + filter.category +`%` },
        cast: { [Op.like]: `%` + filter.cast +`%` },
        synopsis: { [Op.like]: `%` + filter.synopsis +`%` },
        releaseDate : { [Op.between]: [filter.startedDate , filter.endDate ]}
      }
    });
    res.json({
      totalPages: limit ? Math.ceil(movies.count / filter.limit) : 1,
      currentPage: page ? Number(page) : 1,
      data: movies
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
