import React from "react";
import ProductCard from "./ProductCard";
import products from "../data";

function ProductContainer() {

    return (
        <div className="product-container">
            {products.map((card) => (
                <ProductCard product={card} key={card.id}/>
            ))}
        </div>
    )
}

export default ProductContainer