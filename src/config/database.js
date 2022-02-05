import 'dotenv/config'
import { Sequelize } from "sequelize";

const username = process.env.DB_USERNAME || 'cafeinai';
const password = process.env.DB_PASSWORD || 'passCafe312';
const host = process.env.DB_HOST || 'db4free.net';
const database = process.env.DB_HOST || 'tickit312';

const db = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql"
});

export default db;