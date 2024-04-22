import React from "react";
import styles from "./styles.module.css"
import Logo from './logo/Logo';
import Menu from './menu/Menu';
import Authorization from "./authorization/Authorization";

export default function нeader () {
    return (
        <div className={styles.root}>
            <Logo></Logo>
            <Menu></Menu>
            <Authorization></Authorization>
        </div>
    )
}