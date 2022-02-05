import express from "express";
import userRoutes from "../modules/users/routes/index.js";
import roleRoutes from "../modules/roles/routes/index.js";
import movieRoutes from "../modules/movies/routes/index.js";
import locationRoutes from "../modules/locations/routes/index.js";
import ticketRoutes from "../modules/tickets/routes/index.js";
import paymentRoutes from "../modules/payments/routes/index.js";
import orderRoutes from "../modules/orders/routes/index.js";

const router = express.Router();

router
  .use('/users', userRoutes)
  .use('/roles', roleRoutes)
  .use('/movies', movieRoutes)
  .use('/locations', locationRoutes)
  .use('/tickets', ticketRoutes)
  .use('/payments', paymentRoutes)
  .use('/orders', orderRoutes)

export default router;
