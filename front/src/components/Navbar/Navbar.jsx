import styles from "./Navbar.module.css"
import logo from "../../assets/toothLogo2.png"
import userLogo from "../../assets/account.png"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className={styles.navBarContainer}>
            <div className={styles.logoSection}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.linkSection}>
                <Link to="/home">Home</Link>
                <Link to="/appointments/:id">Mis Turnos</Link>
                <Link to="/users/register">Registrarse</Link>
                <Link to="/">Login</Link>
            </div>
            <div className={styles.avatarSection}>
                <div>
                    <img src={userLogo} alt="userLogo" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;