import React from "react";
import style from "./styles.module.css"
import ButtonsProduct from "./buttonsProduct/ButtonsProduct";
import ListOfContent from "./listOfContent/ListOfContent"



export default function body () {
    return (
        <div className={style.root}>
            <ButtonsProduct></ButtonsProduct>
            <ListOfContent></ListOfContent>
        </div>
    )
}