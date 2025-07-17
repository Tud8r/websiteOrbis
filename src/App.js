import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import Hero from './Components/hero';
import Features from './Components/features';
import Motive from './Components/motive'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main >
        <Hero />
        <Features />
        <Motive />

      </main >
      {/* <footer className='footer-section'> 
      </footer>*/}
    </div >
  );
}

export default App;
