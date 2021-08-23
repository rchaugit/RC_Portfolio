import React from "react";
import styles from "./Banner.module.scss";

function Banner() {
    return (
        <div className={styles.Banner}>
            <div className={styles.Banner_txt}>
                <h1>Richard Chau</h1>
            </div>
            <div className={styles.Banner_desc}>
                <p>A Junior software developer</p>
            </div>
        </div>
    );
}

export default Banner;
