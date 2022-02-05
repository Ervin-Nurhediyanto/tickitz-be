import { Sequelize } from "sequelize";
import db from "../../../config/database.js";

const { DataTypes } = Sequelize;

const Ticket = db.define('tickets', {
  movieId: {
    type: DataTypes.NUMBER
  },
  locationId: {
    type: DataTypes.NUMBER
  },
  times: {
    type: DataTypes.STRING
  },
  ticketDate: {
    type: DataTypes.DATE
  },
  premiere: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.NUMBER
  },
  city: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true
})

export default Ticket;
