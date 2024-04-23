import React from "react";
import style from "./styles.module.css";

export default function buttonProduct ({name}: {name: string}) {
    return (
        <div className={style.root}>
            <button>{name}</button>
        </div>
    )
}