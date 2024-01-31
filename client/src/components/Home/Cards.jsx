import React from "react";

const Cards = () => {
  const arr = [
    {
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/upskilljpg-03.jpg",
      rating: 3,
    },
    {
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/upskilljpg-08.jpg",
      rating: 3,
    },
    {
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/upskilljpg-09-1024x575.jpg",
      rating: 4.5,
    },
    {
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/upskilljpg-04-1024x575.jpg",
      rating: 3.9,
    },
  ];

  return (
    <div className="font-poppins p-[23px] md:p-[43px] z-0 mt-10">
      <h2 className="text-center text-2xl md:py-4 font-bold">
        Featured Classes
      </h2>
      <div className=" mx-auto container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {arr.map((card) => {
          return (
            <div className=" shadow-xl my-[33px] w-[90%] transition ease-in-out duration-300  hover:translate-y-[-9px] rounded-xl tra overflow-hidden">
              <div>
                <img src={card.link} alt="" />
              </div>

              <div className="p-4">
                <h6 className="tracking-wide font-poppins text-sm font-semibold pb-2">
                  Adobe Illustrator CC – Advanced Training Course
                </h6>
                <p className="pb-2 font-poppins text-xs tracking-wide">
                  By <span>Instructor</span> in <span>Course</span>
                </p>
                <div className="pb-2 tracking-wide">
                  <Ratings />
                </div>
                <p className="pb-2 font-bold">
                  Rs. 100{" "}
                  <span className="font line-through font-normal text-xs mx-2">
                    Rs. 150
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

import { useState } from "react";

const Ratings = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="starComponent">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            type="button"
            className="star-rating-on"
            onClick={() => setRating(index)}
          >
            <span className="text-xl">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
