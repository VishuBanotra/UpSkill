import React from "react";
import CourseCard from "./CourseCard";

const CourseContainer = () => {
  return (
    <section className="mx-auto mt-10 font-poppins font-semibold tracking-wide ">
      <h2 className="text-[30px] text-center">All Courses</h2>
      <div className="">
        <div className="gap-4 grid grid-cols-1 ">
          <CourseCard />
        </div>
      </div>
    </section>
  );
};

export default CourseContainer;
