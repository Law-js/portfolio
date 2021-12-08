import React from "react";
import Navbar from "../components/NavBar";
import { AnimatePresence } from "framer-motion";
import ProjectList from "./../components/portfolio/ProjectList";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div className="portfolio">
        <AnimatePresence>
          <ProjectList />
        </AnimatePresence>
      </div>
    </>
  );
};

export default Portfolio;
