import React from 'react';
import mailIcon from "../../assets/mail.png";
import githubIcon from "../../assets/github.png";
import telephoneIcon from "../../assets/telephone.png";
import linkedinIcon from "../../assets/linkedin.png";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTitle}>
                <h2>Sociales</h2>
                <hr />
            </div>
            <div className={styles.socialIcons}>
                <a href="tel:+1234567890" target="_blank">
                    <img src={telephoneIcon} alt="Phone" className={styles.icon} />
                </a>
                <a href="mailto:figueira.carlos1212@gmail.com" target="_blank">
                    <img src={mailIcon} alt="Email" className={styles.icon} />
                </a>
                <a href="https://github.com/Carlosf12" target="_blank">
                    <img src={githubIcon} alt="Github" className={styles.icon} />
                </a>
                <a href="https://www.linkedin.com/in/carlos-eduardo-figueira-214a64275" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;