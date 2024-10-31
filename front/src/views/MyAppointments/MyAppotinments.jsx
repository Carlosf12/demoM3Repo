import styles from './MyAppointments.module.css'
import { Appointments } from '../../components/Appointments/Appointments';
const MyAppointments = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sonríe con confianza: ¡Agenda tu cita ahora!</h1>
            <p className={styles.description}>Olvídate de las esperas. Reserva tu turno dental en línea y disfruta de una atención personalizada en el horario que más te convenga.</p>
            <Appointments />
        </div>
    )
}

export default MyAppointments;