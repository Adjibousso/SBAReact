import React from "react";
import { Categories } from "../assets/mockData";
import model from "../assets/images/model.jpg"
import CategorieSection from "../compoments/CategorieSection";


const Home = ()=>{
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
                </div>
    )
}

export default Home