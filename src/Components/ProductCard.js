import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function ProductCard(props) {
    const {
        product: { src, id, title, price } ,
    } = props;
    const {addItemToCart} = useContext(CartContext);

    const giveCartProductDetails = (e) => {
        const productDetails = {
            src: src,
            id: id,
            title: title,
            price: price
        }
        addItemToCart(productDetails)
    }

    return (
        <div 
            className="product-card"
            id={id}
        >
            <figure>
                <img src={src} alt={title}/>
            </figure>
            <figcaption>
                {title}
                <br/>
                {price}
            </figcaption>
            <button
                onClick={giveCartProductDetails}
            >Add to Cart</button>
        </div>
    )
}

export default ProductCard;