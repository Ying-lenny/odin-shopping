import React from "react";

function Product(props) {
    const {
        product: { src, id, title, price } ,
    } = props;

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
        </div>
    )
}

export default Product;