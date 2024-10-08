import { AppointmentStatus } from "../enums/AppointmentStatus";

interface AppointmentDto {
    date: Date,
    time: string,
    userId: number,
    status: AppointmentStatus
}

export default AppointmentDto; 