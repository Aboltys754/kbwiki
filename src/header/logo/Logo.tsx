import React from "react";
import styles from "./styles.module.css"
import LogoKBWiki from "../../image/kb-wiki1.png"


export default function logo() {
    return (
        <div className={styles.root}>
            <a href="">
                <img src={LogoKBWiki} alt="lazy" />
            </a>            
        </div>
    )
}