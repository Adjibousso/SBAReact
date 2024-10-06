import React from "react";


const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.Image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <div className="add-to-cart">
                <span className="btnPlus">+</span>
                <span className="btnAdd">Add to cart </span>
            </div>
        </div>
    );
};

export default ProductCard;
