import { Sequelize } from "sequelize";
import db from "../../../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
  roleId: {
    type: DataTypes.NUMBER
  },
  username: {
    type: DataTypes.STRING,
    required: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    required: true
  },
  email: {
    type: DataTypes.STRING,
    required: true,
    unique: true
  }
}, {
  freezeTableName: true
})

export default User;
