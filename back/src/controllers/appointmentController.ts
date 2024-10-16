import { Request, Response } from "express";
import { cancelAppointmentService, createNewAppointmentService, getAllAppointmentsByIdService, getAppointmentByIdService } from "../services/appointmentServices";
import { error } from "console";

export const getAllAppointments = async (req: Request, res: Response): Promise<Response> => {
    try {
        const allAppointments =  await getAllAppointmentsByIdService();
        return allAppointments
        ? res.status(200).json(allAppointments)
        : res.status(404).json({error: "No appointments found"})
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getAppointmentById = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    try {
        const foundApp = await getAppointmentByIdService(Number(id));
        return foundApp
        ? res.status(200).json(foundApp)
        : res.status(404).json({error: 'Appointment DOES NOT EXIST'})
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const createAppointment = async (req: Request, res: Response): Promise<Response> => {
    try {
        const newApp = await createNewAppointmentService(req.body);
        return newApp 
        ? res.status(201).json(newApp)
        : res.status(400).json({error: "User DOES NOT EXIST"})
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const cancelAppointment = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {id} = req.params
        const cancelApp = await cancelAppointmentService(Number(id))
        return cancelApp
        ? res.status(200).json('Appointment Cancelled')
        : res.status(404).json('Appointment DOES NOT EXIST')
    } catch (error) {
        return res.status(500).json(error)
    }
}