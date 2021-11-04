import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/*<Navbar />*/}
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
