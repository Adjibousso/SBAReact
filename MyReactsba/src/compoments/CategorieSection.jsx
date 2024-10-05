import React from "react";
import { Categories } from "../assets/mockData";
import Man from "../assets/images/man.jpg";
import Woman from "../assets/images/woman.jpg";
import Kids from "../assets/images/kids.jpg";

const categories = [
    {
        title: "Men",
        imageurl: Man,
    },
    {
        title: "Women",
        imageurl: Woman,
    },
    {
        title: "Kids",
        imageurl: Kids,
    },
];

const CategorieSection = () => {
    return (
        <div className="contain mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
            {categories.map((category, index) => (
                <div key={index}  className="index">
                    <img src={category.imageurl} alt={category.title}  className="imageurl"/>
                    <div className="absolute top-20 left-0-12">
                        <p className="text-xl font-bold"> {category.title}</p>
                        <p className="text-gray-600">View All</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategorieSection;
