import React from "react";
import { arr } from "../../mockData.js";

const CourseCard = () => {
  return arr.map((item, index) => (
    <div key={index}>
      <div className=" hover:scale-105 transition ease-in-out duration-150 w-[250px] h-[300px] border m-2">
        <img src={item.img} alt="" />
        <div className="p-2">
          <h2 className="font-semibold">{item.name}</h2>
          <p className="text-xs text-gray-600">{item.instructor}</p>
          <p className="mt-1 font-semibold text-sm">4.7 </p>
          <p className="font-semibold text-sm">₹ {item.price}</p>
          <div className="text-xs mt-2">
            <button className="bg-primary_color_1 hover:bg-yellow_1 text-primary_white_1 hover:text-black font-semibold py-2 px-4 transition-all ease-in-out duration-150 mr-2">
              Add to Cart
            </button>
            <button className=" bg-primary_color_1 hover:bg-yellow_1 text-primary_white_1 hover:text-black font-semibold py-2 px-4 transition-all ease-in-out duration-150">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default CourseCard;
