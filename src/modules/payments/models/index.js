import { Sequelize } from "sequelize";
import db from "../../../config/database.js";

const { DataTypes } = Sequelize;

const Payment = db.define('payments', {
  userId: {
    type: DataTypes.NUMBER
  },
  movieId: {
    type: DataTypes.NUMBER
  },
  locationId: {
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
  totalTicket: {
    type: DataTypes.NUMBER
  },
  totalPayment: {
    type: DataTypes.NUMBER
  },
  paymentMethod: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true
})

export default Payment;
