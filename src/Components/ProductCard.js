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
            <div className="product-image">
                <img src={src} alt={title}/>
            </div>
            <div className="product-info">
                <h4>{title}</h4>
                <h4>Price: €{price}</h4>
                <button
                    className="product-button"
                    onClick={giveCartProductDetails}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard;