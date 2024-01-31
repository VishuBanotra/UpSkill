import React from "react";
import { Link } from "react-router-dom";

import Cards from "./Cards";
import Hero from "./Hero.jsx";
import Banner from "./Banner.jsx";
import Testimonial from "./Testimonial.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <section>
      <Hero />
      <Cards />
      <Banner />
      <Testimonial />
    </section>
  );
};

export default Home;
