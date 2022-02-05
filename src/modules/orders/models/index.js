import { Sequelize } from "sequelize";
import db from "../../../config/database.js";

const { DataTypes } = Sequelize;

const Order = db.define('orders', {
  userId: {
    type: DataTypes.NUMBER
  },
  movieId: {
    type: DataTypes.NUMBER
  },
  locationId: {
    type: DataTypes.NUMBER
  },
  paymentId: {
    type: DataTypes.NUMBER
  },
  premiere: {
    type: DataTypes.STRING
  },
  ticketDate: {
    type: DataTypes.DATE
  },
  ticketTime: {
    type: DataTypes.STRING
  },
  seatNumber: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.NUMBER
  },
  link: {
    type: DataTypes.STRING
  }

}, {
  freezeTableName: true
})

export default Order;
