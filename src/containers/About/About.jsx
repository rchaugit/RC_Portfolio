import React from "react";
import styles from "./About.module.scss";
import section1 from "../../assets/gtr.jpg";
import section2 from "../../assets/mixer.jpg";
import section3 from "../../assets/kb.jpg";

function About() {
    return (
        <div className={styles.About}>
            <div className={styles.About_one}>
                <img
                    className={styles.About_one__img}
                    alt="img1"
                    src={section1}
                ></img>
            </div>
            <div className={styles.About_two}>
                <img
                    className={styles.About_two__img}
                    alt="img2"
                    src={section2}
                ></img>
            </div>
            <div className={styles.About_three}>
                <img
                    className={styles.About_three__img}
                    alt="img3"
                    src={section3}
                ></img>
            </div>
        </div>
    );
}

export default About;
