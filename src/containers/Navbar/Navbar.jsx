import React from "react";
import styles from "./Navbar.module.scss";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const classes = menuOpen ? [styles.Navbar, styles.active] : [styles.Navbar];

    return (
        <nav className={classes.join(" ")}>
            <div className={styles.Navbar_logo}>Logo RC</div>
            <div className={styles.Navbar_menu}>
                <p className={styles.Navbar_menu__obj}>Home</p>
                <p className={styles.Navbar_menu__obj}>Portfolio</p>
                <p className={styles.Navbar_menu__obj}>About</p>
                <p className={styles.Navbar_menu__obj}>Contact</p>
            </div>
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
