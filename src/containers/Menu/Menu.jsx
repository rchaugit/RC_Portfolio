import React from "react";
import styles from "./Menu.module.scss";

export default function Menu() {
    return (
        <div className={styles.Menu}>
            <Link to="/" className={styles.Menu_obj}>
                Home
            </Link>
            <Link to="/portfolio" className={styles.Menu_obj}>
                Portfolio
            </Link>
            <Link to="/about" className={styles.Menu_obj}>
                About
            </Link>
            <Link to="/contact" className={styles.Menu_obj}>
                Contact
            </Link>
        </div>
    );
}
