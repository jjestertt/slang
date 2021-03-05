import React from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";

export default function App() {
    const data = {
        title: "Жимолость",
        text: "(лат. Lonícera) — род прямостоячих, вьющихся или ползучих кустарников; типовой род семейства Жимолостные (Caprifoliaceae). Своё латинское название род получил в честь немецкого математика, физика и ботаника Адама Лоницера (1528—1586), хотя первоначально Карл Линней собирался назвать их каприфолями (Caprifolium), поскольку чаще всего в садах Европы выращивали именно жимолость каприфоль"
    }
  return (
      <div className="appWrapper">
          <div className="container">
              <Header />
              <Content title={data.title} text={data.text}/>
          </div>
      </div>
  )
}