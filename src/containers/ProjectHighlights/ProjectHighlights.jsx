import React from "react";
import styles from "./ProjectHighlights.module.scss";
import HighlightCard from "../../components/HighlightCard";
import Collapsible from "react-collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";

import image1 from "../../assets/mothdx/mothdx.png";
import bookshelf from "../../assets/bookshelf.jpg";
import morse from "../../assets/morse.jpg";
import calc from "../../assets/calc.jpg";

function ProjectHighlights() {
    return (
        <div className={styles.ProjectHighlights}>
            <h2>Project Highlights</h2>
            <div className={styles.ProjectHighlights_container}>
                <div className={styles.ProjectHighlights_container__cards}>
                    <HighlightCard
                        img={image1}
                        title="Mothdx LIMS"
                        desc="Proprietary LIMS tool for MothDX"
                    />
                    <HighlightCard
                        // img={image1}
                        title="Ecommerce Website"
                        desc="eCommerce Site with ReactJS/Firebase"
                    />
                </div>
                <Collapsible
                    div
                    classParentString={
                        styles.ProjectHighlights_container__collapse
                    }
                    trigger={
                        <FontAwesomeIcon
                            icon={faCaretSquareDown}
                            size="1x"
                            color="black"
                        />
                    }
                >
                    <div
                        className={
                            styles.ProjectHighlights_container__collapse___cards
                        }
                    >
                        <HighlightCard
                            img={bookshelf}
                            title="Google books API Search Engine"
                            desc="HTML/Javascript DOM API engine"
                        />

                        <HighlightCard
                            img={morse}
                            title="Morse Code Translator"
                            desc="HTML/Javascript English <-> Morse Translator"
                        />
                        <HighlightCard
                            img={calc}
                            title="HTML DOM Calculator"
                            desc="HTML/Javascript Calculator built around DOM"
                        />
                    </div>
                </Collapsible>
            </div>
        </div>
    );
}

export default ProjectHighlights;
