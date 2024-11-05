import { useEffect, useState } from "react"
import Appointment from "../Appointment/Appointment"
import styles from "./Appointments.module.css"
import axios from 'axios'
import { useUserContext } from "../../context/UserContext"
import { useNavigate } from 'react-router-dom'
import { HOME } from '../../helpers/routes'


export const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const { user, updateUserAppointments, cancelAppointment, userAppointments } = useUserContext();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!user) {
            navigate(HOME);
            return;
        }
        const fetchAppointments = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/users/${user.id}`);
                if (JSON.stringify(res.data.appointments) !== JSON.stringify(appointments)) {
                    updateUserAppointments(res.data.appointments);
                    setAppointments(res.data.appointments)
                }
            } catch (error) {
                console.error("Error al obtener los turnos:", error);
            }
        };
        fetchAppointments();
    }, [user, navigate, userAppointments])



    const handleCancelApp = async (id) => {
        await cancelAppointment(id);
        setAppointments((prevAppointments) => prevAppointments.filter((app) => app.id !== id));
    }
    return (
        <div className={styles.container}>
            {userAppointments.length === 0 && <p className="no-appointments"> No hay turnos creados</p>}
            {userAppointments?.map((app) => (
                <Appointment
                    key={app.id}
                    id={app.id}
                    date={new Date(app.date).toLocaleDateString()}
                    time={app.time}
                    status={app.status}
                    handleCancelApp={() => handleCancelApp(app.id)}
                />
            ))}
            
        </div>
    );
};