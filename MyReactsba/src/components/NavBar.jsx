import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";



const NavBar = () => {
    const products = useSelector(state => state.cart.products)
    return (
        <nav className="nav">
            <div className="container">
                <div className="text-lg font-bold">
                    <Link to="/">Afric'art shop</Link>
                </div>
                <div className="form">
                    <form>
                        <input type="text" placeholder="Search a product" className="search" />
                        <FaSearch className="fasearch" />
                    </form>
                </div>
                <div className="cart">
                    <Link to="/cart"><FaShoppingCart />
                    {products.length > 0 && (
                        <span className="cartItem">
                      {products.length}
                        </span>
                    )}
                    </Link>
                    <button className="login">Login | Register</button>
                    <button className="user"><FaUser /></button>
                </div>
            </div>
            <div className="navicon">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/Shop" className="hover:underline">Shop</Link>
                <Link to="/Contact" className="hover:underline">Contact</Link>
            </div>
        </nav>
    );
}

export default NavBar;
