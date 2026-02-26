import express from 'express';
import pingRouter from './ping.router';
import bookingRouter from './booking.router';

const v1Router = express.Router();

console.log("v1Router loaded");
v1Router.use('/ping',  pingRouter);
v1Router.use('/bookings', bookingRouter);

export default v1Router;