import React from "react";
import styles from "./Portfolio.module.scss";

function Portfolio() {
    return (
        <div className={styles.Portfolio}>
            <h3>Portfolio</h3>
            <div className={styles.Portfolio_projects}>
                <div>
                    <img alt="1"></img>
                    <h3>1</h3>
                </div>
                <div>
                    <img alt="2"></img>
                    <h3>2</h3>
                </div>
                <div>
                    <img alt="3"></img>
                    <h3>3</h3>
                </div>
                <div>
                    <img alt="4"></img>
                    <h3>4</h3>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
