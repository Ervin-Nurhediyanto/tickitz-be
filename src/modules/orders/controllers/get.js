import Order from "../models/index.js";
import { Op } from "sequelize";

export const get = async (req, res) => {
  const {
    limit,
    page,
    userId,
    movieId,
    locationId,
    paymentId,
    premiere,
    ticketDate,
    ticketTime,
    seatNumber
  } = req.query

  const oneDay = 1000 * 60 * 60 * 24
  const endDate = new Date(`${ticketDate} 00:00:00`).getTime() + oneDay

  let filter = {
    limit: limit ? Number(limit) : null,
    offset: page ? Number(limit * (page - 1)) : 0,
    userId: userId ? Number(userId) : '',
    movieId: movieId ? Number(movieId) : '',
    locationId: locationId ? Number(locationId) : '',
    paymentId: paymentId ? Number(paymentId) : '',
    premiere: premiere ? premiere : '',
    // Ticket Date
    startedDate: ticketDate ? new Date(`${ticketDate} 00:00:00`) : new Date('1900-01-01 00:00:00'),
    endDate: ticketDate ? new Date(endDate) : new Date('9999-12-12 23:59:59'),
    ticketTime: ticketTime ? ticketTime : '',
    seatNumber: seatNumber ? seatNumber : ''
  }

  try {
    const orders = await Order.findAndCountAll({
      limit: filter.limit,
      offset: filter.offset,
      where: {
        userId: { [Op.like]: `%` + filter.userId +`%` },
        movieId: { [Op.like]: `%` + filter.movieId +`%` },
        locationId: { [Op.like]: `%` + filter.locationId +`%` },
        paymentId: { [Op.like]: `%` + filter.paymentId +`%` },
        premiere: { [Op.like]: `%` + filter.premiere +`%` },
        ticketDate : { [Op.between]: [filter.startedDate , filter.endDate ]},
        ticketTime: { [Op.like]: `%` + filter.ticketTime +`%` },
        seatNumber: { [Op.like]: `%` + filter.seatNumber +`%` }
      }
    });
    res.json({
      totalPages: limit ? Math.ceil(orders.count / filter.limit) : 1,
      currentPage: page ? Number(page) : 1,
      data: orders
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
