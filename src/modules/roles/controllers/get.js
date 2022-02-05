import Role from "../models/index.js";
import { Op } from "sequelize";

export const get = async (req, res) => {
  const { limit, page, roleName } = req.query
  let filter = {
    limit: limit ? Number(limit) : null,
    offset: page ? Number(limit * (page - 1)) : 0,
    roleName: roleName ? roleName : ''
  }

  try {
    const roles = await Role.findAndCountAll({
      limit: filter.limit,
      offset: filter.offset,
      where: {
        roleName: { [Op.like]: `%` + filter.roleName +`%` }
      }
    });
    res.json({
      totalPages: limit ? Math.ceil(roles.count / filter.limit) : 1,
      currentPage: page ? Number(page) : 1,
      data: roles
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
