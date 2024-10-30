import styles from './Appointment.module.css'

const Appointment = ({ date , time, status, handleCancelApp}) => {
    return (
        <div className={styles.container}>
            <p className={styles.date}>Fecha: {date}</p>
            <p className={styles.time}>Hora: {time}</p>
            <p className={styles.status}>Status: {status}</p>
            <button onClick={handleCancelApp}>Cancelar</button>
        </div>
    )
}

export default Appointment;