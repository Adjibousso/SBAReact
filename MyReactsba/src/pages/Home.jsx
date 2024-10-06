import React, { useEffect } from "react";
import { Categories } from "../assets/mockData";
import model from "../assets/images/model.jpg"
import CategorieSection from "../components/CategorieSection";
import { setProducts } from "../redux/productSlice";
import { useDispatch,useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { mockData } from "../assets/mockData";


 


const Home = ()=>{

    const dispatch = useDispatch()
    const products = useSelector(state =>state.product)
    useEffect(()=> {
        dispatch(setProducts(mockData))
    },[])
    return (

        <div>
            <div> 
                <div>

                    <div>

                        <div>Shop By categories</div>

                    </div>
                    <ul >
                        {Categories.map((category, index)=>(

                            <li key={index}>{}
                                <div></div>
                                {category}
                            </li>
                        ))}
                    </ul>
                    <div className="sizeIt">
                 <img src={model} alt="image" className="model"/>
                    </div>
                </div>
                </div>
                <CategorieSection/>
                <div className="gallery">
                     {products.products.map(((product)=> (
                <ProductCard  product={product}   /> 
                )
                ))} </div>
                </div>
    )
}

export default Home