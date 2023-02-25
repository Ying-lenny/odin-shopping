import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import ShoppingCartCard from "./ShoppingCartCard";
import { v4 as uuidv4 } from 'uuid'
import '../styles/ShoppingCart.css'

function ShoppingCart({toggleShoppingCart}) {

    const {cart} = useContext(CartContext);

    let totalPrice = 0;

    return( 
        <>
            <div className="screen-overlay" onClick={toggleShoppingCart}></div>
            <div className="shopping-cart-view">
                <div className="product-view">
                    {cart.map((product) => {
                        totalPrice += parseFloat(product["price"]);
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
                <div className="shopping-cart-bottom">
                    <div className="total-price">
                        <h2>{'Total: €'.concat(Math.round(totalPrice * 100)/ 100)}</h2>
                    </div>
                    <button
                        className="shopping-cart-btn"
                        onClick={() => {
                            alert("Thanks for visiting! :)");
                        }}
                        >
                        <h2>Checkout</h2>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart;