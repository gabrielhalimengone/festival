import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Program from './components/Program';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Program />
        <Speakers />
        <Tickets />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;