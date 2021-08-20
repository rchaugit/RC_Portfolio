import React from "react";
import styles from "./Landing.module.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Landing() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backSpeed: 60,
            strings: ["Developer", "Audio Engineer", "Musician"],
        });
    }, []);
    return (
        <div className={styles.Landing}>
            <div className={styles.Landing_intro}>
                <img className={styles.Landing_intro__img} alt="introimg"></img>
                <p className={styles.Landing_intro__title}>Richard Chau</p>
                <p className={styles.Landing_intro__desc}>
                    <span ref={textRef}></span>
                </p>
            </div>
            <div className={styles.Landing_about}>
                <p> A little about me.</p>
            </div>
            <div className={styles.Landing_port}>
                <p>A few things i've done</p>
            </div>
        </div>
    );
}

export default Landing;
