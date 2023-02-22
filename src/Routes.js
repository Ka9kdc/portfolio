import React from 'react';
import { Route, Routes } from 'react-router';
import About from './About';
import ContactForm from './Other/ContactForm';
import Home from './Home';
import Projects from './Projects';
import SingleProject from './Projects/SingleProject';
import Publications from './Publications';
import Skills from './Skills';

const AppRoute = () => (
  <Routes>
    <Route path="/portfolio/Project/:id" element={<SingleProject />} />
    <Route path="/portfolio/Projects" element={<Projects />} />
    <Route path="/portfolio/Skills" element={<Skills />} />
    <Route path="/portfolio/Publications" element={<Publications />} />
    <Route path="/portfolio/ContactMe" element={<ContactForm />} />
    <Route path="/portfolio/About" element={<About />} />
    <Route path="/portfolio" element={<Home />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRoute;
