import { useContext } from "react";
import CartContext from "../context/CartContext";

function ShoppingCartCard({product, showAdd}){
    const {removeItemFromCart} = useContext(CartContext)

    function removeFromCart(){
        showAdd();
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