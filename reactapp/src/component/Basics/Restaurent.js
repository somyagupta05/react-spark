import React, { useState } from 'react'
import MenuCard from './MenuCard';
import './style.css'
import Menu from './menuApi.js';
const Restaurent = () => {
 const[menuData,setmenuData]=useState(Menu);
 
  return (
    <>
    <MenuCard menuData={menuData}/>
    
    </>
  )
}

export default Restaurent