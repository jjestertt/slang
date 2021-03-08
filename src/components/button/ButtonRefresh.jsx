import React from "react";
import style from "./Button.module.scss"


const ButtonRefresh = props => {
    return (
        <div>
            <a {...props} className={"btn-floating btn-large waves-effect waves-light " + style.buttonRefresh}>
                <i className="material-icons">autorenew</i>
            </a>
        </div>
    )
}

export default ButtonRefresh;