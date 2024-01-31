import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="w-full  md:px-[43px] md:mt-10">
        <div className="xl:w-[90%] mx-auto h-[400px] md:h-[450px] md:bg-home-img bg-no-repeat bg-cover bg-center md:rounded-xl ">
          <div className="md:w-[550px] lg:w-auto px-[23px] md:pl-[120px] pt-[80px] md:pt-[100px]">
            <h2 className="font-poppins text-5xl font-bold tracking-wide">
              Learning that gets you
            </h2>
            <p className="font-poppins text-xl mt-5 tracking-wide">
              Skills for your present
              <br />{" "}
              <span className="text-primary_color_1 font-bold text-2xl md:text-gray-800">
                And
              </span>{" "}
              your future.
              <br />
              Get started with us.
            </p>
          </div>
          <div className="mt-5 md:pl-[120px]">
            <Link to={"/courses"} className="shadow-lg font-poppins font-bold tracking-wide px-4 py-2 ml-4 md:ml-0 rounded-md bg-primary_color_1 md:bg-primary_color_1 text-primary_white_1 transition ease-in-out duration-400 hover:bg-yellow_1 md:hover:bg-primary_white_1 md:hover:text-gray-800  hover:text-gray-800">
              Learn Now
            </Link>
          </div>
        </div>
      </div>
      <Categories />
    </section>
  );
};

export default Hero;

const Categories = () => {
  const CategoryName = [
    {
      name: "All Categories",
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/Asset-014.png",
    },
    {
      name: "Development",
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/Asset-09.png",
    },
    {
      name: "Business",
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/Asset-08.png",
    },
    {
      name: "Marketing",
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/Asset-07.png",
    },
    {
      name: "Finance",
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/Asset-010.png",
    },
    {
      name: "Design",
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/Asset-011.png",
    },
    {
      name: "Photography",
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/Asset-012.png",
    },
    {
      name: "Office",
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/Asset-015.png",
    },
  ];

  return (
    <section className="w-full mt-10 bg-gray-100  py-10">
      <div className="container mx-auto">
        <ul className="grid lg:grid-cols-8 grid-cols-3">
          {CategoryName.map((category, index) => {
            return (
              <li key={index} className=" text-nowrap text-center py-5 lg:py-0">
                <span className="flex justify-center items-center cursor-pointer">
                  <img className="h-12 " src={category.link} alt="" />
                </span>
                <Link
                  className="text-sm font-md font-poppins tracking-wide hover:text-primary_color_1"
                  to="/courses"
                >
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
