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
          <Route path="/" element={<Home />} />
          <Route path="/our-founder" element={<OurFounder />} />
          <Route path="/music" element={<Music />} />
          {/* Add all pages in my project as routes */}
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/companies-support" element={<CompaniesSupport />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          {/* Add additional routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
