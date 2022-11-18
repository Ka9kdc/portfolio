import React from 'react';
import { Route, Routes } from 'react-router';
import About from './About';
// Import ContactForm from './Other/ContactForm';
import Home from './Home';
import Projects from './Projects';
import SingleProject from './Projects/SingleProject';
import Publications from './Publications';
import Skills from './Skills';

const AppRoute = () => (
  <Routes>
    <Route path="/Project/:id" element={<SingleProject />} />
    <Route path="/Projects" element={<Projects />} />
    <Route path="/Skills" element={<Skills />} />
    <Route path="/Publications" element={<Publications />} />
    {/* <Route path="/ContactMe" element={<ContactForm/>} /> */}
    <Route path="/About" element={<About />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRoute;
