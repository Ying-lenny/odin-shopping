import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import ShoppingCartCard from "./ShoppingCartCard";
import { v4 as uuidv4 } from 'uuid'

function ShoppingCart() {

    const {cart} = useContext(CartContext);

    return( 
        <div>
            {cart.map((product) => {
                return (
                    <div>
                        <ShoppingCartCard
                            title={product["title"]}
                            product={product}
                            id={product["id"]}
                            key={uuidv4()}
                        />
                    </div>
                );
            })}
        </div>
    )
}

export default ShoppingCart;