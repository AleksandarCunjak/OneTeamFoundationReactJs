import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import OurFounder from "./pages/OurFounder/OurFounder";
import Music from "./pages/Music/Music";
import Sports from "./pages/Sports/Sports";
import Entertainment from "./pages/Entertainment/Entertainment";
import Workshops from "./pages/Workshops/Workshops";
import UpcomingEvents from "./pages/UpcomingEvents/UpcomingEvents";
import CompaniesSupport from "./pages/CompaniesSupport/CompaniesSupport";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import OurProjects from "./pages/OurProjects/OurProjects";
import OurMission from "./pages/OurMission/OurMission";
import Arts from "./pages/Arts/Arts";
import Donate from "./pages/Donate/Donate";
import About from "./pages/About/About";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/our-founder" Component={OurFounder} />
          <Route path="/music" Component={Music} />
          <Route path="/sports" Component={Sports} />
          <Route path="/entertainment" Component={Entertainment} />
          <Route path="/workshops" Component={Workshops} />
          <Route path="/upcoming-events" Component={UpcomingEvents} />
          <Route path="/companies-support" Component={CompaniesSupport} />
          <Route path="/blog" Component={Blog} />
          <Route path="/contact" Component={Contact} />
          <Route path="/our-projects" Component={OurProjects} />
          <Route path="/our-mission" Component={OurMission} />
          <Route path="/arts" Component={Arts} />
          <Route path="/donate" Component={Donate} />
          <Route path="/about" Component={About} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;