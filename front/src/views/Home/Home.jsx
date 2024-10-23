import styles from './Home.module.css'
import { Appointments } from '../../components/Appointments/Appointments';
const Home = () => {
    return (
            <div className={styles.container}>
                <h3>Bienvenido al Gestor de Turnos</h3>
                <Appointments />
            </div>
    )   
}

export default Home;