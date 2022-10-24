import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
