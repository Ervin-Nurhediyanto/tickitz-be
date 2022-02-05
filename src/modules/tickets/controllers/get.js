import Ticket from "../models/index.js";
import { Op } from "sequelize";

export const get = async (req, res) => {
  const {
    limit,
    page,
    movieId,
    locationId,
    times,
    ticketDate,
    premiere
  } = req.query

  const oneDay = 1000 * 60 * 60 * 24
  const endDate = new Date(`${ticketDate} 00:00:00`).getTime() + oneDay

  let filter = {
    limit: limit ? Number(limit) : null,
    offset: page ? Number(limit * (page - 1)) : 0,
    movieId: movieId ? movieId : '',
    locationId: locationId ? locationId : '',
    times: times ? times : '',
    // ticketDate
    startedDate: ticketDate ? new Date(`${ticketDate} 00:00:00`) : new Date('1900-01-01 00:00:00'),
    endDate: ticketDate ? new Date(endDate) : new Date('9999-12-12 23:59:59'),
    premiere: premiere ? premiere : '',
  }

  try {
    const tickets = await Ticket.findAndCountAll({
      limit: filter.limit,
      offset: filter.offset,
      where: {
        movieId: { [Op.like]: `%` + filter.movieId +`%` },
        locationId: { [Op.like]: `%` + filter.locationId +`%` },
        times: { [Op.like]: `%` + filter.times +`%` },
        ticketDate : { [Op.between]: [filter.startedDate , filter.endDate ]},
        premiere: { [Op.like]: `%` + filter.premiere +`%` },
      }
    });
    res.json({
      totalPages: limit ? Math.ceil(tickets.count / filter.limit) : 1,
      currentPage: page ? Number(page) : 1,
      data: tickets
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
