import React from "react";
 const ProductCard = ({product})=> {

    return(
        <div>
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
        </div>
    )
}

export default ProductCard