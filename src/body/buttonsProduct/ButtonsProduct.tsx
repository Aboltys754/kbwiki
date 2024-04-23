import React from "react";
import style from "./styles.module.css";
import ButtonProduct from "./buttonProduct/ButtonProduct";

const list_button = ['KBA', 'Monita', 'Arenda', 'Scaner', 'Kognita',]

export default function buttonProduct () {
    return (
        <div className={style.root}>
            {list_button.map((value, index) => <ButtonProduct key={index} name={value}></ButtonProduct>)}
        </div>
    )
}