import React, { useEffect } from "react";
import { Categories } from "../assets/mockData";
import model from "../assets/images/model.jpg"
import CategorieSection from "../compoments/CategorieSection";
import { setProducts } from "../redux/cartSlice";
import { useDispatch,useSelector } from "react-redux";


 


const Home = ()=>{

    const dispatch = useDispatch()
    const products = useSelector(state =>state.product)
    useEffect(()=> {
        dispatch(setProducts())
    },[])
    return (

        <div>
            <div> 
                <div>

                    <div>

                        <div>Shop By categories</div>

                    </div>
                    <ul>
                        {Categories.map((category, index)=>(

                            <li key={index}>
                                <div></div>
                                {category}
                            </li>
                        ))}
                    </ul>
                    <div>
                 <img src={model} alt="image"  className="photo"/>
                    </div>
                </div>
                </div>
                <CategorieSection/>
                <div> {products.products.slice(0,5).map(((products)=> (
                    <ProductCard product={product} />)
                ))} </div>
                </div>
    )
}

export default Home