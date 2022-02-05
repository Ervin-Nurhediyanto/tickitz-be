import 'dotenv/config'
import { Sequelize } from "sequelize";

const username = process.env.DB_USERNAME || 'root';
const password = process.env.DB_PASSWORD || '';
const host = process.env.DB_HOST || 'localhost';

const db = new Sequelize('ticket_db', username, password, {
  host: host,
  dialect: "mysql"
});

export default db;