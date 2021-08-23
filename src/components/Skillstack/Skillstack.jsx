import React from "react";
import styles from "./Skillstack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faSass,
    faCss3,
    faJs,
    faReact,
    faBootstrap,
    faHtml5,
    faJava,
} from "@fortawesome/free-brands-svg-icons";

function Skillstack(open) {
    return (
        <div className={styles.Skillstack}>
            <h3>Tech Stack</h3>
            <div className={styles.Skillstack_languages}>
                <FontAwesomeIcon icon={faHtml5} size="3x" color="white" />
                <FontAwesomeIcon icon={faCss3} size="3x" color="white" />
                <FontAwesomeIcon icon={faJs} size="3x" color="white" />
                <FontAwesomeIcon icon={faJava} size="3x" color="white" />
            </div>
            <div className={styles.Skillstack_other}>
                <FontAwesomeIcon icon={faReact} size="3x" color="white" />
                <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
                <FontAwesomeIcon icon={faSass} size="3x" color="white" />
                <FontAwesomeIcon icon={faBootstrap} size="3x" color="white" />
            </div>
        </div>
    );
}

export default Skillstack;
