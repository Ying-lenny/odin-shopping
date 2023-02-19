import {React, useState} from "react";
import ProductContainer from "./ProductContainer";
import ShoppingCart from "./ShoppingCart";
import Ryan from '../Assets/Ryan.jpg'

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
                <img src={Ryan} alt='Ryan'/>
            </div>
            <div>
                <ProductContainer/>
            </div>
            <h1>Hello from Catalog</h1>
        </div>
    )
}

export default Catalog;