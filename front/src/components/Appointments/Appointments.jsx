import { useEffect, useState } from "react"
import Appointment from "../Appointment/Appointment"
import styles from "./Appointments.module.css"
import axios from 'axios'

export const Appointments = () => {

    const [appointments, setAppointments] = useState([]);

    const handleCancelApp = (id) => {
        console.log(`Turno ${id} cancelado`);
    }

    useEffect(()=>{
        axios.get("http://localhost:3000/appointments")
        .then(res=> setAppointments(res.data))
    },[])

    return (
        <div className={styles.container}>
            {appointments.map((app) => (
                <Appointment
                    key={app.id}
                    id={app.id}
                    date={app.date}
                    time={app.time}
                    status={app.status}
                    handleCancelApp={() => handleCancelApp(app.id)}
                />
            ))}
        </div>
    );
};