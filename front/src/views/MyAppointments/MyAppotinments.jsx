import styles from './MyAppointments.module.css'
import { Appointments } from '../../components/Appointments/Appointments';
const MyAppointments = () => {
    return (
            <div className={styles.container}>
                <h3 className={styles.title}>Bienvenido al Gestor de Turnos</h3>
                <Appointments />
            </div>
    )   
}

export default MyAppointments;