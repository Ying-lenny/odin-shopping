import React from "react";
import Product from "./Product";
import products from "../data";

function ProductContainer() {

    return (
        <>
            {products.map((card) => (
                <Product product={card} key={card.id}/>
            ))}
        </>
    )
}

export default ProductContainer