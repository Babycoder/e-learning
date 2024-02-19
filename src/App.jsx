import React from "react";
import { Hero, Navbar, Companies, Courses } from "./components/index";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
    </>
  );
};

export default App;
