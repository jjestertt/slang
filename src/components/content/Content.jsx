import React from "react";
import {data} from "../../data/data";
import {useState, useEffect} from "react";
import RandomContent from "./RandomContent/RandomContent";


const Content = () => {

    let [numItem, setNumItem] = useState(0);

    //Для получения рамдомного айтема мы используем длинну массива свойства рандома и округления
    const getRandomItem = () => {
        const random = Math.floor(Math.random() * (data.length));
        setNumItem(random);
    }

    useEffect(getRandomItem, []);

    return (
            <RandomContent title={data[numItem].title} text={data[numItem].text}
                           img={data[numItem].img} getRandomItem={getRandomItem}/>
    );
}
export default Content;