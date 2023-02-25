import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import ShoppingCartCard from "./ShoppingCartCard";
import { v4 as uuidv4 } from 'uuid'
import '../styles/ShoppingCart.css'

function ShoppingCart({toggleShoppingCart}) {

    const {cart} = useContext(CartContext);

    return( 
        <>
            <div className="screen-overlay" onClick={toggleShoppingCart}></div>
                <div className="shopping-cart-view">
                    <div className="product-view">
                        {cart.map((product) => {
                            return (
                                <div className="cart-item">
                                    <ShoppingCartCard
                                        title={product["title"]}
                                        product={product}
                                        id={product["id"]}
                                        key={uuidv4()}
                                        showAdd={product["showAdd"]}
                                    />
                                </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default ShoppingCart;