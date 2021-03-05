import React from "react";
import "./../../"
import style from "./Header.module.scss"

//Right now header show only logo


const Header = () => (
    <div className={style.header}>
        <h1 className={style.headerLogo}>Slang</h1>
    </div>
);


export default Header;