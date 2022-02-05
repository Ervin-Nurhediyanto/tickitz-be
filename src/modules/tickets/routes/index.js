import express from "express";
import { get } from "../controllers/get.js";
import { insert } from "../controllers/insert.js";
import { find } from "../controllers/find.js";
import { update } from "../controllers/update.js";
import { _delete } from "../controllers/delete.js";
import verifyAccess from "../../../middlewares/auth.js";

const router = express.Router();

router
  .get('/', get)
  .get('/:id', find)
  .post('/', verifyAccess, insert)
  .patch('/:id', verifyAccess, update)
  .delete('/:id', verifyAccess, _delete)

export default router;
