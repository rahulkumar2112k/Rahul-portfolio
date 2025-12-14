import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Contact } from "./components/Contact";
import { Footer } from './components/Footer';

import SkillsOverview from './components/SkillsOverview';
import Skills from './components/Skills'; // full skill page
import  MoreProjects  from "./components/MoreProjects";

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <SkillsOverview /> {/* This is the compact version */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/more-projects" element={<MoreProjects />} />
    </Routes>
  );
}

export default App;
