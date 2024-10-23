import { useState } from "react"
import { allAppointments } from "../../helpers/allAppointments"
import Appointment from "../Appointment/Appointment"
import styles from "./Appointments.module.css"
// import PropTypes from "prop-types";

export const Appointments = () => {

    const [appointments] = useState(allAppointments);
    const handleCancelApp = (id) => {
        console.log(`Turno ${id} cancelado`);
    }

    return (
        <div className={styles.container}>
            <h2>Turnos Registrados:</h2>
            {appointments.map((app) => (
                <Appointment
                    key={app.id}
                    id={app.id}
                    name={app.user.name}
                    date={app.date}
                    time={app.time}
                    status={app.status}
                    handleCancelApp={() => handleCancelApp(app.id)}
                />
            ))}
        </div>
    );
};

// Appointment.propTypes = {
//     name: PropTypes.string.isRequired,
//     date: PropTypes.Date.isRequired,
// }