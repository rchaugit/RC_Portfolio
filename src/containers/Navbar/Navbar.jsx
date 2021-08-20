import React from "react";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const classes = menuOpen ? [styles.Navbar, styles.active] : [styles.Navbar];

    return (
        <nav className={classes.join(" ")}>
            <div className={styles.Navbar_logo}>Logo RC</div>
            <div className={styles.Navbar_menu}>
                <Link to="/" className={styles.Navbar_menu__obj}>
                    Home
                </Link>
                <Link to="/portfolio" className={styles.Navbar_menu__obj}>
                    Portfolio
                </Link>
                <Link to="/about" className={styles.Navbar_menu__obj}>
                    About
                </Link>
                <Link to="/contact" className={styles.Navbar_menu__obj}>
                    Contact
                </Link>
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
