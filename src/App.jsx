import React from "react";
import { Hero, Navbar, Companies, Courses, Achievement, Categories, Feedback } from "./components/index";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
    </>
  );
};

export default App;
