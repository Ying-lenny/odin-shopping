import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import ShoppingCartCard from "./ShoppingCartCard";

function ShoppingCart() {

    const {cart} = useContext(CartContext);

    return( 
        <div>
            {cart.map((product) => {
                return (
                    <div>
                        <ShoppingCartCard
                            key={product["title"]}
                            product={product}
                        />
                    </div>
                );
            })}
        </div>
    )
}

export default ShoppingCart;