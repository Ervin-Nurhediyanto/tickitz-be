import express from "express";
import { get } from "../controllers/get.js";
import { insert } from "../controllers/insert.js";
import { find } from "../controllers/find.js";
import { update } from "../controllers/update.js";
import { _delete } from "../controllers/delete.js";
import { login } from "../controllers/login.js";
import { forgot } from "../controllers/forgot.js";
import verifyAccess from "../../../middlewares/auth.js";

const router = express.Router();

router
  .get('/', get)
  .get('/:id', find)
  .post('/', insert)
  .post('/login', login)
  .post('/forgot', forgot)
  .patch('/:id', update)
  .delete('/:id',verifyAccess,  _delete)

export default router;
