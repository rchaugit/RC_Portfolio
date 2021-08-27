import React from "react";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFolder,
    faAddressCard,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

import icon from "../../assets/favicon_io/android-chrome-512x512.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const classes = menuOpen
        ? [styles.Navbar, styles.active]
        : [styles.Navbar, styles.inactive];

    return (
        <nav className={classes.join(" ")}>
            <Link to="/">
                <img
                    src={icon}
                    className={styles.Navbar_logo}
                    alt="RC Logo"
                ></img>
            </Link>
            <div className={styles.Navbar_socials}>
                <FontAwesomeIcon
                    className={styles.Navbar_socials__obj}
                    icon={faLinkedin}
                    size="2x"
                    color="white"
                />
                <FontAwesomeIcon
                    className={styles.Navbar_socials__obj}
                    icon={faGithub}
                    size="2x"
                    color="white"
                />
            </div>

            <ul className={styles.Navbar_list}>
                <Link to="/portfolio">
                    <li className={styles.Navbar_list__item}>Portfolio</li>
                </Link>
                <Link to="/about">
                    <li className={styles.Navbar_list__item}>About</li>
                </Link>
                <Link to="/contact">
                    <li className={styles.Navbar_list__item}>Contact</li>
                </Link>
            </ul>
            <div className={styles.Navbar_mobile}>
                <div className={styles.Navbar_mobile__nav}>
                    <Link to="/portfolio">
                        <div className={styles.Navbar_mobile__nav__obj}>
                            <FontAwesomeIcon
                                className={
                                    styles.Navbar_mobile__nav__obj___icon
                                }
                                icon={faFolder}
                                size="1x"
                                color="white"
                            />
                            <p
                                className={
                                    styles.Navbar_mobile__nav__obj___text
                                }
                            >
                                Portfolio
                            </p>
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className={styles.Navbar_mobile__nav__obj}>
                            <FontAwesomeIcon
                                className={
                                    styles.Navbar_mobile__nav__obj___icon
                                }
                                icon={faAddressCard}
                                size="1x"
                                color="white"
                            />
                            <p
                                className={
                                    styles.Navbar_mobile__nav__obj___text
                                }
                            >
                                About
                            </p>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className={styles.Navbar_mobile__nav__obj}>
                            <FontAwesomeIcon
                                className={
                                    styles.Navbar_mobile__nav__obj___icon
                                }
                                icon={faEnvelope}
                                size="1x"
                                color="white"
                            />
                            <p
                                className={
                                    styles.Navbar_mobile__nav__obj___text
                                }
                            >
                                Contact
                            </p>
                        </div>
                    </Link>
                </div>
                <div
                    className={styles.Navbar_mobile__hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
