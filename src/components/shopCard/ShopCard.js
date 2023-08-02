import React, { Fragment } from "react";
import './ShopCard.css'
const ShopCard=(props)=>
{
    console.log(props)
    return(
        <Fragment>
       <section className='shopCard-body'>
       <img id="shopImg" src={props.item.img}></img>
       <div className='card-image-text'> <span>{props.item.label}</span> <span>{props.item.price}</span></div>
       </section>
        </Fragment>
    )
}
export default ShopCard