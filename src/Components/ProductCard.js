import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";

function ProductCard(props) {
    const {
        product: { src, id, title, price } ,
    } = props;

    const[showAdd, setShowAdd] = useState(true);
    const {addItemToCart} = useContext(CartContext);

    const giveCartProductDetails = (e) => {
        setShowAdd(false);
        const productDetails = {
            src: src,
            id: id,
            title: title,
            price: price,
            showAdd: ()=>{setShowAdd(true)},
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
                <h4 className="product-title">{title}</h4>
                <h4>Price: €{price}</h4>
                <div className="product-btn-container">
                    { showAdd ?
                        <button
                            className="product-button"
                            onClick={giveCartProductDetails}
                        >
                            Add to Cart
                        </button>
                    : null }
                </div>
            </div>
        </div>
    )
}

export default ProductCard;