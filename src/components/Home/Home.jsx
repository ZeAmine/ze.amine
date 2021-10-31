import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.css";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__wrap">
          <Hero />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
