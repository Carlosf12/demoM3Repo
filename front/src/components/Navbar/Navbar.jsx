import styles from "./Navbar.module.css"
import logo from "../../assets/toothLogo2.png"
import userLogo from "../../assets/account.png"
import { Link } from "react-router-dom"
import { HOME, MY_APPOINTMENTS, SLASH, USER_REGISTER } from "../../helpers/routes"

const Navbar = () => {
    return (
        <div className={styles.navBarContainer}>
            <div className={styles.logoSection}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.linkSection}>
                <Link to={HOME}>Home</Link>
                <Link to={MY_APPOINTMENTS}>Mis Turnos</Link>
                <Link to={USER_REGISTER}>Registrarse</Link>
                <Link to={SLASH}>Login</Link>
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