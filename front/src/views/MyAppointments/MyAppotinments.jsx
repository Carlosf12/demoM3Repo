import styles from './MyAppointments.module.css';
import { Appointments } from '../../components/Appointments/Appointments';
import Footer from '../../components/Footer/Footer';
import smileGirlImage from "../../assets/smilegirl2.webp";
import kidSmileImage from "../../assets/kidSmiling.jpg";
import { useState } from 'react';
import axios from "axios";



const MyAppointments = () => {
    const [newApp, setNewApp] = useState({
        date: '',
        time: '',
        status: 'Active',
    });
    const handleChange = (event) => {
        setNewApp({
            ...newApp,
            [event.target.name]: event.target.value
        });
        
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/appointments/schedule");
            console.log("Turno creado con exito", response.data);
            setNewApp({ date: '', time: '', status: 'Active' })
        } catch (error) {
            console.error("Error al crear el turno:", error)
        }
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sonríe con confianza: ¡Agenda tu cita ahora!</h1>
            <p className={styles.description}>Olvídate de las esperas. Reserva tu turno dental en línea y disfruta de una atención personalizada en el horario que más te convenga.</p>
            <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formAppGallery}>
                <label>
                    Fecha:
                    <input type="date" name="date" value={newApp.date} onChange={handleChange} />
                </label>
                <label>
                    Hora:
                    <input type="time" name="hour" value={newApp.hour} onChange={handleChange} />
                </label>
                <button type="submit" onClick={handleSubmit}>Agendar Cita</button>
                </div>
            </form>
            </div>
            <Appointments />
            <h1 className={styles.title}>¡Tu sonrisa, nuestra prioridad!</h1>
            <div className={styles.imageSection}>
                <img src={smileGirlImage} alt="gilrSmiling" />
                <img src={kidSmileImage} alt="gilrSmiling" />
            </div>
            <Footer />
        </div>
    )
}

export default MyAppointments;