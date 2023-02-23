import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../Assets/cart.png"

function  Nav({}){
    return (
        <div className="navbar">
                <ul className="nav-links">
                    <Link to='/'>Home</Link>
                    <Link to='/Catalog'>Catalog</Link>
                </ul>
        </div>
    )
}

export default Nav