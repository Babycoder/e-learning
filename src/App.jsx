import React from "react";
import { Hero, Navbar, Companies, Courses, Achievement, Categories } from "./components/index";
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
    </>
  );
};

export default App;
