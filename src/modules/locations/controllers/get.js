import Location from "../models/index.js";
import { Op } from "sequelize";

export const get = async (req, res) => {
  const { limit, page, city, address } = req.query
  let filter = {
    limit: limit ? Number(limit) : null,
    offset: page ? Number(limit * (page - 1)) : 0,
    city: city ? city : '',
    address: address ? address : ''
  }

  try {
    const locations = await Location.findAndCountAll({
      limit: filter.limit,
      offset: filter.offset,
      where: {
        city: { [Op.like]: `%` + filter.city +`%` },
        address: { [Op.like]: `%` + filter.address +`%` }
      }
    });
    res.json({
      totalPages: limit ? Math.ceil(locations.count / filter.limit) : 1,
      currentPage: page ? Number(page) : 1,
      data: locations
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
