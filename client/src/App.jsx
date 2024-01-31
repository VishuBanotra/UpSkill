import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import Courses from "./components/Courses.jsx";
import Header from "./components/Layout/Header.jsx";
import Register from "./components/Authentication/Register.jsx";
import Login from "./components/Authentication/Login.jsx";
import Contact from "./components/Layout/Contact.jsx";
import Bootcamp from "./components/Layout/Bootcamp.jsx";
import Footer from "./components/Home/Footer.jsx";

function App() {
  const isAuthenticated = false;
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
