import React from "react";
import style from "./Content.module.scss"
import ButtonRefresh from "../button/ButtonRefresh";

//Right now header show only logo


const Content = (props) => (
        <div className={style.contentWrapper}>
            <h2 className={style.contentTitle}>{props.title}</h2>
            <p className={style.contentText}><b>{props.title}</b> {props.text}</p>
            <div className={style.button}>
                <ButtonRefresh>Refresh</ButtonRefresh>
            </div>

        </div>
);


export default Content;