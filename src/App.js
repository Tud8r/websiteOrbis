import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import Hero from './Components/hero';




function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main >
        <Hero />

      </main >
      {/* <footer className='footer-section'> 
      </footer>*/}
    </div >
  );
}

export default App;
