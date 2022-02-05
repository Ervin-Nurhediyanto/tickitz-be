import 'dotenv/config'
import express from "express";
import db from "./src/config/database.js";
import routes from './src/routes/index.js';
import cors from "cors";

const app = express();

try {
  await db.authenticate();
  console.log('Database connected...');
} catch (error) {
  console.error('Connection error:', error);
}

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/uploads', express.static('./uploads'));
app.use('/api/v1/', routes);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT + ' 🚀'));
