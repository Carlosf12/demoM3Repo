import styles from './Appointment.module.css'

const Appointment = ({name, date , time, status, handleCancelApp}) => {
    return (
        <div className={styles.container}>
            <h3>Nombre: {name}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>{status}</p>
            <button onClick={handleCancelApp}>Cancelar</button>
        </div>
    )
}

export default Appointment;