import { useContext, useEffect, useState } from "react"
import Appointment from "../Appointment/Appointment"
import styles from "./Appointments.module.css"
import axios from 'axios'
import {UserContext} from "../../context/User"

export const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [flag, setFlag] = useState(false)

    // useEffect(()=>{
    //     axios.get("http://localhost:3000/appointments")
    //     .then(res => setAppointments(res.data))
    //     .catch((err) => alert(err.res.data.message))
    // },[flag]);

    useEffect(()=>{
        const fetchApp = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/appointments`);
                setAppointments(response.data)
            } catch (error) {
                console.error("Error al conseguir los turnos:", error)
            }
        };
        fetchApp();
    }, [])


    const handleCancelApp = async (id) => {
        try {
            await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
            setFlag(!flag)
        } catch (error) {
            alert(error)
        }
    };

    return (
        <div className={styles.container}>
            {appointments.length === 0 && <p className="no-appointments"> No hay turnos creados</p>}
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