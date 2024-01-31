import React from "react";
import { useState } from "react";

const StarComponent = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  console.log(`Star rating is ${rating}`);
  return (
    <div className="starComponent">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            type="button"
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(rating ? 0 : index)}
            onMouseEnter={setHover(index)}
            onMouseLeave={setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarComponent;
