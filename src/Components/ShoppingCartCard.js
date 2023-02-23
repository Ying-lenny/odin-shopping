import { useContext } from "react";
import CartContext from "../context/CartContext";

function ShoppingCartCard({product}){
    const {removeItemFromCart} = useContext(CartContext)

    function removeFromCart(){
        removeItemFromCart(product)
    }

    return(
        <div className="shopping-card">
            <img src={product["src"]} alt={product["title"]}/>
            <button onClick={removeFromCart}>Button</button>
        </div>
    )
}

export default ShoppingCartCard;