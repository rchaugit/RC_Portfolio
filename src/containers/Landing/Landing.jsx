import React from "react";
import styles from "./Landing.module.scss";
import Skillstack from "../../components/Skillstack";
import Banner from "../../components/Banner";
import ProjectHighlights from "../ProjectHighlights";

function Landing() {
    return (
        <div className={styles.Landing}>
            <Banner />
            <ProjectHighlights />
            <Skillstack />
        </div>
    );
}

export default Landing;
