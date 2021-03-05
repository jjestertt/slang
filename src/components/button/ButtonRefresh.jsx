import React from "react";
import {Button} from "antd";
import style from "./Button.module.scss"



const ButtonRefresh = props => {
    return (
        <div>
            <Button {...props} className={style.buttonRefresh + " " + props.className} type="primary" shape="circle"/>
        </div>
    )
}

export default ButtonRefresh;