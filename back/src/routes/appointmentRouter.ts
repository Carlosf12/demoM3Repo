import { Router } from "express";
import { cancelAppointment, createAppointment, getAppointmentId, getAppointments } from "../controllers/appointmentController";

const appointmentRouter = Router();

appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/:id", getAppointmentId);
appointmentRouter.post("/schedule", createAppointment);
appointmentRouter.put("/cancel", cancelAppointment);


export default appointmentRouter;