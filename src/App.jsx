import React from 'react';
import About from './pages/About';
import Banner from './pages/Banner';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import HomeBlog from './pages/HomeBlog';
import Footer from './pages/partials/Footer';
import Header from './pages/partials/Header';
import Portfolio from './pages/Portfolio';
import Servieces from './pages/Servieces';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Servieces />
      <Portfolio />
      <Experience />
      <Testimonials />
      <HomeBlog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
