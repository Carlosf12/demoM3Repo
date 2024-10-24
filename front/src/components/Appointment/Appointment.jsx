import styles from './Appointment.module.css'

const Appointment = ({ date , time, status, handleCancelApp}) => {
    return (
        <div className={styles.container}>
            <p>Fecha: {date}</p>
            <p>Hora: {time}</p>
            <p>Status: {status}</p>
            <button onClick={handleCancelApp}>Cancelar</button>
        </div>
    )
}

export default Appointment;