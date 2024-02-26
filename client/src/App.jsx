import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

// Components
import Home from "./components/Home/Home.jsx";
import Header from "./components/Layout/Header.jsx";
import Register from "./components/Authentication/Register.jsx";
import Login from "./components/Authentication/Login.jsx";
import Contact from "./components/Layout/Contact.jsx";
import Bootcamp from "./components/Layout/Bootcamp.jsx";
import Footer from "./components/Home/Footer.jsx";
import UserDashboard from "./components/Dashboard/UserDashboard.jsx";
import AllCourses from "./components/Courses/AllCourses.jsx";
import { useEffect } from "react";
import { loadUser } from "./app/actions/authAction.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
