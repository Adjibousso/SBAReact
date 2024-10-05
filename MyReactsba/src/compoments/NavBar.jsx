import React from "react";
import {FaSearch, FaUser} from "react-icons/fa"
import { Link } from "react-router-dom";

const NavBar = ()=> {

    return (
        <nav className="bg=white shadow-md">
<div>

    <div>
        <link to= "/">Afric'art shop</link>
    </div>
 <div>
    <form>
    <input type="text" placeholder="Search a product"/>

    <FaSearch></FaSearch>
</form>
</div>
<div>
    <link to= "/cart">< FashoppingCart/></link>
    <button>Login | register</button>
    <button> <FaUser/></button>
</div>
</div>
        </nav>
    )
}

export default NavBar