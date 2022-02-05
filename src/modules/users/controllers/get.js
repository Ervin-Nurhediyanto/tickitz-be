import User from "../models/index.js";
import { Op } from "sequelize";

export const get = async (req, res) => {
  const { limit, page, username, email } = req.query
  let filter = {
    limit: limit ? Number(limit) : null,
    offset: page ? Number(limit * (page - 1)) : 0,
    username: username ? username : '',
    email: email ? email : ''
  }

  try {
    const users = await User.findAndCountAll({
      limit: filter.limit,
      offset: filter.offset,
      where: {
        username: { [Op.like]: `%` + filter.username +`%` },
        email: { [Op.like]: `%` + filter.email +`%` }
      }
    });
    res.json({
      totalPages: limit ? Math.ceil(users.count / filter.limit) : 1,
      currentPage: page ? Number(page) : 1,
      data: users
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
