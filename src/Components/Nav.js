import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../Assets/Cart"
import CartContext from "../context/CartContext";

function  Nav({toggleShoppingCart}){
    const {cart} = useContext(CartContext)
    return (
        <div className="navbar">
                <nav className="nav-links">
                    <Link to='/'>Home</Link>
                    <Link to='/Catalog'>Catalog</Link>
                    <Link to='/Catalog' onClick={toggleShoppingCart} className='cart-container'>
                        <CartIcon className="cart-icon"/>
                        <span className="cart-count-container">
                            <span>{cart.length}</span>
                        </span>
                    </Link>
                </nav>
        </div>
    )
}

export default Nav