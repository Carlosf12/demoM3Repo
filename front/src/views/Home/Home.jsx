import styles from './Home.module.css'
import { ImgText } from '../../components/ImgText/ImgText';
const Home = () => {
    return (
            <div className={styles.container}>
                <h3>Bienvenido al Gestor de Turnos</h3>
                <ImgText />
            </div>
    )
}

export default Home;