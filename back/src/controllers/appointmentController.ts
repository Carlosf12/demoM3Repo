import { Request, Response } from "express";

export const getAppointments = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({message:"Route to GET appointments successful!"})
}
export const getAppointmentId = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({message:"Route to GET getAppointmentId successful!"})
}
export const createAppointment = async (req: Request, res: Response): Promise<Response> => {
    return res.status(201).json({message:"Route to POST createAppointment successful!"})
}
export const cancelAppointment = async (req: Request, res: Response): Promise<Response> => {
    return res.status(201).json({message:"Route to POST cancelAppointment successful!"})
}