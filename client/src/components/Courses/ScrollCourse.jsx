import React from "react";
import CourseCard from "./CourseCard.jsx";

const ScrollCourse = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <section className="font-poppins tracking-wide p-[50px]">
      <div>
        <h2 className="font-semibold mb-8 text-[33px]">Explore our Courses</h2>
        <p className="text-[20px] font-semibold mb-3">
          Courses to get you started
        </p>
      </div>

      <div className="relative border">
        <button
          onClick={slideLeft}
          className="hover:bg-yellow_1 text-primary_white_1 hover:text-black  cursor-pointer text-[40px] rounded-full bg-primary_color_1 px-[17px] absolute left-[-30px] top-1/2"
        >
          &lt;
        </button>

        <div
          className="flex items-center p-10 overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
          id="slider"
        >
          <CourseCard />
        </div>

        <button
          onClick={slideRight}
          className=" hover:bg-yellow_1 text-primary_white_1 hover:text-black  cursor-pointer text-[40px] rounded-full bg-primary_color_1 px-[17px] absolute top-1/2 right-[-30px]"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ScrollCourse;
