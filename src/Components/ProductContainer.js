import React from "react";
import Product from "./Product";
import products from "../data";

function ProductContainer() {

    return (
        <div className="product-container">
            {products.map((card) => (
                <Product product={card} key={card.id}/>
            ))}
        </div>
    )
}

export default ProductContainer