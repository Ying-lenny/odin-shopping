import React from "react";

function Product(props) {
    const {
        product: { src, id, title, price } ,
    } = props;

    const addToCart = () => {
        console.log("Add to cart")
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
                onClick={addToCart}
            >Add to Cart</button>
        </div>
    )
}

export default Product;