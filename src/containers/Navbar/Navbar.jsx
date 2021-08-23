import React from "react";
import styles from "./Navbar.module.scss";
import { useState } from "react";

import icon from "../../assets/favicon_io/android-chrome-512x512.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const classes = menuOpen ? [styles.Navbar, styles.active] : [styles.Navbar];

    return (
        <nav className={classes.join(" ")}>
            <img src={icon} className={styles.Navbar_logo} alt="RC Logo"></img>

            <ul className={styles.Navbar_list}>
                <li className={styles.Navbar_list__item}>Portfolio</li>
                <li className={styles.Navbar_list__item}>About</li>
                <li className={styles.Navbar_list__item}>Contact</li>
            </ul>
            <div
                className={styles.Navbar_hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;
