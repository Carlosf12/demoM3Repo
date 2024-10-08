import { Request, Response } from "express";
import { cancelAppointmentService, createNewAppointmentService, getAllAppointmentsByIdService, getAppointmentByIdService } from "../services/appointmentServices";

export const getAllAppointments = async (req: Request, res: Response): Promise<Response> => {
    const allAppointments =  await getAllAppointmentsByIdService();
    return res.status(200).json(allAppointments);
}

export const getAppointmentById = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const foundApp = await getAppointmentByIdService(Number(id));
    return foundApp
    ? res.status(200).json(foundApp)
    : res.status(404).json({error: 'Appointment DOES NOT EXIST'})
}
export const createAppointment = async (req: Request, res: Response): Promise<Response> => {
    const newApp = await createNewAppointmentService(req.body);
    return newApp 
    ? res.status(201).json({message:"Success", newApp})
    : res.status(404).json({error: "User DOES NOT EXIST"})
}
export const cancelAppointment = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params
    const cancelApp = await cancelAppointmentService(Number(id))
    return cancelApp
    ? res.status(200).json('Appointment Cancelled')
    : res.status(404).json('Appointment DOES NOT EXIST')
}