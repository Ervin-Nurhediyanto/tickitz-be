import { Sequelize } from "sequelize";
import db from "../../../config/database.js";

const { DataTypes } = Sequelize;

const Location = db.define('locations', {
  city: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true
})

export default Location;
