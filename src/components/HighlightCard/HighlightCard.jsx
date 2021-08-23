import React from "react";
import styles from "./HighlightCard.module.scss";

function HighlightCard({ img, title, desc }) {
    return (
        <div className={styles.HighlightCard}>
            <img
                className={styles.HighlightCard_img}
                src={img}
                alt={title}
            ></img>
            <div className={styles.HighlightCard_textbox}>
                <h3 className={styles.HighlightCard_text__title}>{title}</h3>
                <p className={styles.HighlightCard_text__desc}>{desc}</p>
            </div>
        </div>
    );
}

export default HighlightCard;
