import React, { useState } from "react";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Testimonial = () => {
  let [current, setCurrent] = useState(0);

  const feedback = [
    {
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: "https://i.imgur.com/Dn0qoCG.png",
    },
    {
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
      img: "https://i.imgur.com/fk8eEvW.png",
    },
    {
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: "https://i.imgur.com/dLxxRDy.png",
    },
  ];

  const length = feedback.length;

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className="w-full lg:w-[80%] lg:rounded-2xl mx-auto py-[63px] bg-blue-gradient mt-14">
      <div className="w-auto p- md:w-[750px]  mx-auto ">
        <h2 className="text-center font-poppins tracking-wide font-bold text-4xl text-primary_white_1 mb-[63px]">
          Our Reviews
        </h2>
        <div className="bg-white m-6 lg:m-0 rounded-2xl p-[2rem]">
          {feedback.map((feedback, index) => {
            return (
              index === current && (
                <div key={index}>
                  <div className="py-2">
                    <h2 className="font-poppins tracking-wide font-semibold text-xl">
                      "{feedback.content}"
                    </h2>
                  </div>
                  <div className="mt-5 flex items-center justify-start gap-5">
                    <div>
                      <img
                        className="border-2 border-primary_color_1 rounded-full p-1"
                        src={feedback.img}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="font-poppins font-bold mt-2 text-lg leading-5">
                        {feedback.name}
                      </p>
                      <p className="text-yellow-600 font-semibold font-poppins text-sm">
                        {feedback.title}
                      </p>
                    </div>
                  </div>
                </div>
              )
            );
          })}
          <div className="mt-7">
            <button
              onClick={prev}
              className="font-poppins border px-5 py-3 mr-3 rounded-md text-white bg-primary_color_1 transition ease-in-out duration-200 hover:bg-yellow_1 hover:text-black"
            >
              <MdArrowBackIosNew />
            </button>
            <button
              onClick={next}
              className="font-poppins font-semibold border rounded-md px-5 py-3 text-white bg-primary_color_1  transition ease-in-out duration-200 hover:bg-yellow_1 hover:text-black"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
