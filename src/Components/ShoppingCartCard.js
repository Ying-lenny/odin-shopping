import { useContext } from "react";
import CartContext from "../context/CartContext";

function ShoppingCartCard({product}){
    const {removeItemFromCart} = useContext(CartContext)

    function removeFromCart(){
        removeItemFromCart(product)
    }

    return(
        <>
            <img src={product["src"]} alt={product["title"]}/>
            <button onClick={removeFromCart}>Button</button>
        </>
    )
}

export default ShoppingCartCard;