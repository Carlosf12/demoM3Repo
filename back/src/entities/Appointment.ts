import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import { User } from "./User";

@Entity({
    name: "appointments"
})

export class Appointment {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    date: Date

    @Column()
    time: string

    @Column()
    status: AppointmentStatus

    @ManyToOne(()=> User, (user) => user.appointments)
    user: User;
}