import React, { useState } from "react";
import MenuCard from "./MenuCard";
import "./style.css";
import Menu from "./menuApi.js";
import Navbar from "./Navbar";

const uniqueList = [...new Set(  Menu.map((curElem) => {
    return curElem.category;
  }))
];
const Restaurent = () => {
  const [menuData, setmenuData] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurent;
