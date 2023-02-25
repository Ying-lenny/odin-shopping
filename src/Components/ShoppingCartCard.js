import { useContext } from "react";
import CartContext from "../context/CartContext";

function ShoppingCartCard({product, showAdd}){
    const {removeItemFromCart} = useContext(CartContext)

    function removeFromCart(){
        showAdd();
        removeItemFromCart(product)
    }

    return(
        <>
            <img className="cart-img" src={product["src"]} alt={product["title"]}/>
            <h2>{product['title']}</h2>
            <h2>{product['price']}</h2>
            <button 
                onClick={removeFromCart}
                className='shopping-cart-btn'
            >
                    X
            </button>
        </>
    )
}

export default ShoppingCartCard;