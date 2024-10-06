import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { addToCart } from '../redux/cartSlice';



const Shop = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="shop">
      {products.map((product) => (
        <article className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className="details-div">
            <div className="title-price">
              <p>{product.title}</p>
              <p>${product.price}</p>
            </div>
            <button onClick={addToCart }>Add to cart</button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Shop;
