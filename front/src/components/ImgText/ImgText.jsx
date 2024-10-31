import clinicLogo from "../../assets/dental-clinic.png";
import toothPasteLogo from "../../assets/tooth-paste.png";
import toothLogo from "../../assets/toothLogo.png";
import tuutToothLogo from "../../assets/tuut-tooth.png";
import styles from './ImgText.module.css';

export const ImgText = () => {
  return (
    <div className={styles.container}>
        <h1>Bienvenidos a</h1>
        <img src={tuutToothLogo} alt="" />
        <div className={styles.containerGallery}>
            <div className={styles.imageContainer}>
                <img src={clinicLogo} alt="Logotipo de la clínica dental" />
            </div>
            <div className={styles.textContainer}>
                <p>
                ¿Cuánto tiempo hace que no visitas a tu dentista? Un chequeo regular puede prevenir problemas mayores y garantizar una sonrisa sana e splendente. ¡Reserva tu cita hoy mismo y cuida de tu salud bucal!
                </p>
            </div>
        </div>
        <div className={styles.containerGallery}>
            <div className={styles.imageContainer}>
                <img src={toothPasteLogo} alt="Logotipo de la clínica dental" />
            </div>
            <div className={styles.textContainer}>
                <p>
                ¿Cuándo fue la última vez que te revisaste los dientes? Un chequeo dental regular es esencial para prevenir enfermedades bucales y lucir una sonrisa radiante. ¡Agenda tu cita ahora y disfruta de una boca sana!
                </p>
            </div>
        </div>
        <div className={styles.containerGallery}>
            <div className={styles.imageContainer}>
                <img src={toothLogo} alt="Logotipo de la clínica dental" />
            </div>
            <div className={styles.textContainer}>
                <p>
                ¿Quieres una sonrisa de película? Un chequeo dental regular es el primer paso para lograr una boca sana y hermosa. ¡Programa tu cita y descubre los beneficios de una buena higiene bucal!
                </p>
            </div>
        </div>
    </div>
  );
};

export default ImgText;