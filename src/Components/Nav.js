import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../Assets/Cart"
import CartContext from "../context/CartContext";

function  Nav({toggleShoppingCart}){
    const {cart} = useContext(CartContext)
    return (
        <header className="header">
            <nav className="navbar">
                <Link to='/' className="nav-links">Home</Link>
                <Link to='/Catalog' className="nav-links">Catalog</Link>
                <Link to='/Catalog' onClick={toggleShoppingCart} className='cart-container'>
                    <CartIcon className="cart-icon"/>
                    <span className="cart-count-container">
                        <span>{cart.length}</span>
                    </span>
                </Link>
            </nav>
        </header>
    )
}

export default Nav