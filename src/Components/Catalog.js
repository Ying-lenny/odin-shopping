import {React, useState} from "react";
import ProductContainer from "./ProductContainer";
import ShoppingCart from "./ShoppingCart";
import cart from '../Assets/cart.png'

const Catalog = () => {
    const [cartClicked, setCartClicked] = useState(false)

    return (
        <div>
            <div>
                {cartClicked ? (
                    <ShoppingCart/>
                ) : null }
            </div>
            <div
                onClick={() => {
                    setCartClicked(!cartClicked);
                }}
            >
                <img src={cart} alt='cart'/>
            </div>
            <div>
                <ProductContainer/>
            </div>
            <h1>Hello from the shopping Catalog</h1>
        </div>
    )
}

export default Catalog;