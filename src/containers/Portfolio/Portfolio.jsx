import React from "react";
import styles from "./Portfolio.module.scss";

function Portfolio() {
    return (
        <div className={styles.Portfolio}>
            <div className={styles.Portfolio_item}>
                <p className={styles.Portfolio_item__txt}>MothDX Lims</p>
            </div>
            <div className={styles.Portfolio_item}>ecommerce</div>
            <div className={styles.Portfolio_item}>Morse code</div>
            <div className={styles.Portfolio_item}>Calculator</div>
        </div>
    );
}

export default Portfolio;
