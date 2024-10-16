import { AppointmentModel, UserModel } from "../config/data-source";
import AppointmentDto from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import { AppointmentStatus } from "../enums/AppointmentStatus";

export const getAllAppointmentsByIdService = async (): Promise<Appointment[] | null> => {
    const appointments = await AppointmentModel.find()
    if (appointments.length === 0) {
        return null;
    } else {
        return appointments;
    }
};

export const getAppointmentByIdService = async (id: number): Promise<Appointment | null> => {
    const foundAppointment = await AppointmentModel.findOne({
        where: { id },
        relations: ["user"]
    });
    if (foundAppointment) {
        return foundAppointment;
    } else return null

};

export const createNewAppointmentService = async (appData: AppointmentDto): Promise<Appointment | null> => {
    const { date, time, userId } = appData;

    const newAppointment = new Appointment();
    newAppointment.date = date;
    newAppointment.time = time;
    newAppointment.status = AppointmentStatus.ACTIVE;

    const user = await UserModel.findOneBy({ id: userId })

    if (!date || !time || !AppointmentStatus) {
        return null
    } else if (!user) {
        console.error("User with ID:", userId, "not found");
        return null; 
    } else {
        newAppointment.user = user;
        await AppointmentModel.save(newAppointment);
        return newAppointment;
    }
};

export const cancelAppointmentService = async (id: number): Promise<Appointment | undefined> => {
    const foundAppointment = await getAppointmentByIdService(id);
    if (!foundAppointment) return undefined;

    foundAppointment.status = AppointmentStatus.CANCELLED
    await AppointmentModel.save(foundAppointment);
    return foundAppointment
}