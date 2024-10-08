import AppointmentDto from "../dto/AppointmentDto";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import IAppointment from "../interfaces/IAppointment";

const appintmentsDB: IAppointment[] = [];
let id: number = 1;

export const getAllAppointmentsByIdService = async (): Promise<IAppointment[]> => {
    return appintmentsDB
};

export const getAppointmentByIdService = async (id: number): Promise<IAppointment> => {
    const foundAppointment = appintmentsDB.find((app) => app.id === id);
    if(!foundAppointment) throw new Error("Appointment NOT FOUND");
    return foundAppointment;
};

export const createNewAppointmentService = async (appData: AppointmentDto): Promise<IAppointment | undefined> => {
    const {date, time , userId} = appData;

    const foundApp = appintmentsDB.find((app) => app.id === id)

    if(foundApp){
            const newAppointment: IAppointment = {
                id,
                date,
                time,
                status: AppointmentStatus.ACTIVE,
                userId
            }
            appintmentsDB.push(newAppointment);
            id++;
            return newAppointment;
    } else return undefined;
};

export const cancelAppointmentService = async (id: number): Promise<IAppointment | undefined> => {
    const foundApp: IAppointment = await getAppointmentByIdService(id);
    if(foundApp){
        foundApp.status = AppointmentStatus.CANCELLED
    }
    return foundApp
}