import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Contact from './components/Contact';

function App() {
  return (
    
    <div className="app">
    
      <Header />

      <Home />

      <section id='contact-section'>
        <Contact />
      </section>

      {/*footer*/}
    </div>
  );
}

export default App;
