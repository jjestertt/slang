import React from "react";
import "./../../"
import style from "./Header.module.scss"

//Right now header show only logo


const Header = () => (
    <nav>
        <div className="nav-wrapper">
            <a href="/#" className={style.headerLogo +" brand-logo center"}>Something</a>
        </div>
    </nav>
);


export default Header;