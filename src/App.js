import React from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";

export default function App() {

    return (
        <div className="appWrapper">
            <div className="container">
                <Header/>
                <Content />
            </div>
        </div>
    )
}