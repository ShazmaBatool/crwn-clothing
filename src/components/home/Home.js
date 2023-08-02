import React, { Fragment } from "react";
import '../home/Home.css'
import Navbar from "../navbar/Navbar";
const Home=()=>
{
    return(
        <Fragment>
        <Navbar/>
       <section className='crown-body'>
       <div id='img1' className='hp-img'>
        <div className='hp-img-text'> <span>hats</span> <span>SHOP NOW</span></div>
       </div>
       <div id='img2' className='hp-img'>
        <div className='hp-img-text'> <span>jackets</span> <span>SHOP NOW</span></div>
       </div>
       <div id='img3' className='hp-img'>
        <div className='hp-img-text'> <span>sneakers</span> <span>SHOP NOW</span></div>
       </div>
       <div id='img4' className='hp-img'>
        <div className='hp-img-text'> <span>womens</span> <span>SHOP NOW</span></div>
       </div>
       <div id='img5' className='hp-img'>
        <div className='hp-img-text'> <span>mens</span> <span>SHOP NOW</span></div>
       </div>
       </section>
        </Fragment>
    )
}
export default Home