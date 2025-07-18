import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import Hero from './Components/hero';
import Features from './Components/features';
import Motive from './Components/motive'
import Points from './Components/points';
import PreRegister from './Components/preregister';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main >
        <Hero />
        <Features />
        <Motive />
        <Points />
        <PreRegister />
      </main >
      {/* <footer className='footer-section'> 
      </footer>*/}
    </div >
  );
}

export default App;
