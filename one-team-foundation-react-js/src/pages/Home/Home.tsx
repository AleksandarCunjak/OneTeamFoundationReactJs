import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to One Team Foundation</h1>
          <p>
            Creating a better future for children through various projects and
            initiatives.
          </p>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <h2>Your donation means a lot to them. Donate what you can.</h2>
          <a href="donate.html" className="btn">
            Start Donating
          </a>
        </div>
      </section>
      <section className="events">
        <div className="container">
          <h2>Join Our Upcoming Events</h2>
          <div className="event-card">
            <h3>School For African Poor Children</h3>
            <p>25 Jun, 4:00pm-6:00pm, New York</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
