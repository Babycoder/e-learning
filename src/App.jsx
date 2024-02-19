import React from "react";
import { Hero, Navbar, Companies } from "./components/index";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
    </>
  );
};

export default App;
