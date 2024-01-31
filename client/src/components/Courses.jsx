import React from "react";

const Courses = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <section>
      <div className="w-full">
        <h2>Buisness Courses</h2>
        <p>Courses to get you started</p>

        {arr.map((card, index) => (
          <CourseCard />
        ))}
      </div>
    </section>
  );
};

export default Courses;

const CourseCard = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <h2></h2>
        <p></p>
        <p>Ratings</p>
        <p></p>
      </div>
    </div>

  );
};
