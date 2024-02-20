import React from "react";
import { Hero, Navbar, Companies, Courses, Achievement } from "./components/index";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
    </>
  );
};

export default App;
