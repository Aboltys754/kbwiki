import React from "react";
import style from "./styles.module.css"

const listContentError = [
    "Ошибка обновления",
    "Ошибка отправки фото",
    "Ошибка входа в магазин",
    "Ошибка сканирования qr"
]

export default function listOfContent () {
    return (
        <div className={style.root}>
           {listContentError.map((value, index) => <a key={index} href="">{value}</a>)}
        </div>
    )
}