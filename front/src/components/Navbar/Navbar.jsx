import styles from "./Navbar.module.css"
import logo from "../../assets/customer-support.png"
import userLogo from "../../assets/account.png"

const Navbar = () => {
    return (
        <div className={styles.navBarContainer}>
            <div className={styles.logoSection}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.linkSection}>
                <span>Home</span>
                <span>Mis Turnos</span>
                <span>About</span>
                <span>Contacto</span>
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