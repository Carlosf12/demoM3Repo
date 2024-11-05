import styles from './MyAppointments.module.css';
import { Appointments } from '../../components/Appointments/Appointments';
import Footer from '../../components/Footer/Footer';
import smileGirlImage from "../../assets/smilegirl2.webp";
import kidSmileImage from "../../assets/kidSmiling.jpg";
import { useState , useEffect } from 'react';
import axios from "axios";
import { useUserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../helpers/routes';



const MyAppointments = () => {
    const [newApp, setNewApp] = useState({
        date: '',
        time: '',
    });
    const handleChange = (event) => {
        setNewApp({
            ...newApp,
            [event.target.name]: event.target.value
        });
    };

    const { user, addAppointment } = useUserContext();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    useEffect(() => {
        if (!user) {
            navigate(HOME);
        }
    }, [user, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!newApp.date || !newApp.time) {
            setError("Todos los campos son obligatorios");
            return;
        }

        try {
            const res = await axios.post("http://localhost:3000/appointments/schedule", {
                date: newApp.date,
                time: newApp.time,
                userId: user.id
            });

            addAppointment(res.data);
            alert("Turno creado con exito");
            
        } catch (error) {
            console.error("Error al crear el turno:", error);
            setError("hubo un error al crear el turno. Inténtalo nuevamente.")
        }
    };

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
                            <input type="time" name="time" value={newApp.time} onChange={handleChange} />
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