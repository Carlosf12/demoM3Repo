import { AppointmentModel, UserModel } from "../config/data-source";
import AppointmentDto from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import { AppointmentStatus } from "../enums/AppointmentStatus";

export const getAllAppointmentsByIdService = async (): Promise<Appointment[]> => {
    const appointments = await AppointmentModel.find()
    return appointments
};

export const getAppointmentByIdService = async (id: number): Promise<Appointment | null> => {
    const foundAppointment = await AppointmentModel.findOne({
        where: {id},
        relations: ["user"]
    });
    if(!foundAppointment) {
        throw new Error("Appointment NOT FOUND");   
    }
    return foundAppointment;

};

export const createNewAppointmentService = async (appData: AppointmentDto): Promise<Appointment | undefined> => {
    const {date, time, userId} = appData;

    const newAppointment = new Appointment();
    newAppointment.date = date;
    newAppointment.time = time;
    newAppointment.status = AppointmentStatus.ACTIVE;
    
    const user  = await UserModel.findOneBy({id: userId})
    
    if(!user) {
    throw new Error("User NOT FOUND'")
    }
    newAppointment.user = user
    await AppointmentModel.save(newAppointment);
    return newAppointment;
};

export const cancelAppointmentService = async (id: number): Promise<Appointment | undefined> => {
    const foundAppointment = await getAppointmentByIdService(id);
    if(!foundAppointment) return undefined;

    foundAppointment.status = AppointmentStatus.CANCELLED
    await AppointmentModel.save(foundAppointment);
    return foundAppointment
}