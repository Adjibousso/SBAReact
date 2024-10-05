import React from "react";
import { Link } from "react-router-dom";
import {FaSearch, FaUser, FaShoppingCart} from "react-icons/fa";


const NavBar = ()=> {

    return (
        <nav className="bg=white shadow-md">
<div>

    <div>
        <Link to= "/">Afric'art shop</Link>
    </div>
 <div>
    <form>
    <input type="text" placeholder="Search a product"/>

    <FaSearch></FaSearch>
</form>
</div>
<div>
    <Link to= "/cart"><FaShoppingCart/></Link>
    <button>Login | register</button>
    <button> <FaUser/></button>
</div>
</div>
        </nav>
    )
}

export default NavBar