import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.navBarContainer}>
            <div className={styles.logoSection}>
            </div>
            <div className={styles.linkSection}>
                <span>Home</span>
                <span>Mis Turnos</span>
                <span>About</span>
                <span>Contacto</span>
            </div>
            <div className={styles.avatarSection}>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;