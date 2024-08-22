import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <main className="about-page">
      <section className="about-info">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Learn more about One Team Foundation, our mission, vision, and
            values. Discover how we are working to create a better future for
            children through our various projects and initiatives.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
