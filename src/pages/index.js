import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Skills from '../sections/Skills';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import MobileNav from '../components/MobileNav'

const IndexPage = () => (
  <Layout>
    {/* <MobileNav /> */}
    <Header />
    <Landing />
    <About />
    <Projects />
    <Experience />
    <Education />
    <Skills />
    <Writing />
    <Footer />
  </Layout>
);

export default IndexPage;
