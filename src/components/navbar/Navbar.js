import React, { Fragment } from "react";
import Crown from '../../images/crown.svg'
import ShoppingBag from '../../images/shopping-bag.svg'
import './Navbar.css'
import { NavLink,Outlet } from "react-router-dom";
function Navbar() {
    return(
        <Fragment>
        <section className='crown-header'>
        <div>
            <NavLink to="/"><img src={Crown} alt='this is crown' className='crown-logo'></img></NavLink>
        </div>
        <div className='header-cta'>
        <button className='header-cta-btn'><NavLink to="/">Home</NavLink></button>
        <button className='header-cta-btn'><NavLink to="/shop">Shop</NavLink></button>
        <button className='header-cta-btn'><NavLink to="/signin">Sign in</NavLink></button>
        <NavLink to="/cart"><img src={ShoppingBag} className="shopping-bag-icon" alt="Shopping Cart"></img></NavLink>
        </div>
        </section>
        <Outlet/>
        </Fragment>
    )
}
export default Navbar