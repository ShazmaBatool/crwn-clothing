import React, { Fragment } from 'react';
import ShopCard from '../shopCard/ShopCard.js';
import ShopCategory from '../shopCategory/ShopCategory';
import './Shop.css'
import Navbar from '../navbar/Navbar'

const Shop=()=>{
    const data = [
        {
            "img": "https://www.crown-clothes.com/images/black-shearling.jpg",
            "label": "Black Jean Shearling",
            "price":125,
            "id":1
        },
        {
            "img": "https://www.crown-clothes.com/images/blue-jean-jacket.jpg",
            "label": "Blue Jean Jacket",
            "price":90,
            "id":2
        },
        {
            "img": "https://www.crown-clothes.com/images/grey-jean-jacket.jpg",
            "label": "Grey Jean Jacket",
            "price":90,
            "id":3
        },
        {
            "img": "https://www.crown-clothes.com/images/brown-shearling.jpg",
            "label": "Brown Shearling",
            "price":165,
            "id":4
        }
    ]
    const title=['JACKETS','HATS','SNEAKERS','WOMENS','MENS']
    return(
        <div>
            <Navbar/>
            <div className='jackets-title'>
            {title.map((name)=>(
            <ShopCategory  items={data} name={name}/>
            ))}
            </div>
       </div>
    ) 
}
export default Shop;