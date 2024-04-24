import React from "react";
import style from "./styles.module.css"

export default function authorization () {
    return (
        <div className={style.root}>
            <form action="" className={style.form_authorization}>
                <div className={style.form_input}>
                    <label htmlFor="login">Логин</label>
                    <input type="text" name="login" id="login" />
                </div>
                <div className={style.form_input}>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className={style.input_button}>
                    <input type="submit" value="Войти"/>
                </div>

            </form>
        </div>
    )
}