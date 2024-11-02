import styles from './MyAppointments.module.css';
import { Appointments } from '../../components/Appointments/Appointments';
import Footer from '../../components/Footer/Footer';
import smileGirlImage from "../../assets/smilegirl2.webp";
import kidSmileImage from "../../assets/kidSmiling.jpg";


const MyAppointments = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sonríe con confianza: ¡Agenda tu cita ahora!</h1>
            <p className={styles.description}>Olvídate de las esperas. Reserva tu turno dental en línea y disfruta de una atención personalizada en el horario que más te convenga.</p>
            <Appointments />
            <div className={styles.imageSection}>
                <img src={smileGirlImage} alt="gilrSmiling" />
                <img src={kidSmileImage} alt="gilrSmiling" />
            </div>
            <Footer />
        </div>
    )
}

export default MyAppointments;