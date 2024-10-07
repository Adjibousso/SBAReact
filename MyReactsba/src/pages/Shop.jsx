import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';


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
  const dispatch = useDispatch();
const handleAdd = (e,product) => {
    
        e.stopPropagation();
        e.preventDefault();
        dispatch(addToCart(product));
        
    };
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
            <button onClick={(e)=>handleAdd(e, product)}>Add to cart</button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Shop;
