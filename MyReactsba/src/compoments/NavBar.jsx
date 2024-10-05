import React from "react";
import { Link } from "react-router-dom";
import {FaSearch, FaUser, FaShoppingCart} from "react-icons/fa";


const NavBar = ()=> {

    return (
        <nav className="nav" >
<div  className="container"> 

    <div className="text-lg font-bold">
        <Link to= "/">Afric'art shop</Link>
    </div>
 <div className="form">
    <form>
    <input type="text" placeholder="Search a product" className="search"/>

    <FaSearch className="fasearch"></FaSearch>
</form>
</div>
<div className="cart">
    <Link to= "/cart"><FaShoppingCart/></Link>
    <button className="login">
        Login | register</button>
    <button className="user"> <FaUser/></button>
</div>
</div>
<div className="navicon"> 
    <Link className="hover:underline"> 
    Home 
    </Link>
    <Link className="hover:underline color=blu"> Shop</Link>
    <Link className="hover:underline">Contact</Link>
</div>
        </nav>
    )
}

export default NavBar