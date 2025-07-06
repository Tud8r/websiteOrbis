import logo from './logo.svg';
import phoneImage from './assets/orbisphone.png';
import { useState } from 'react';
import './App.css';





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
        <div className="hero">
          <div className='hero-wrapper'>
            <div className='hero-text-wrapper'>
              <div className='text-container'>
                <h1 className='header-text'>Know Your Impact. <br />Change It.</h1>
                <text className='hero-text'>Orbis helps you track your daily carbon footprint and turn awareness into real, measurable action — for a healthier planet and a better future.</text>
                <button className='preregister-button'>Pre-Register</button>
              </div>
            </div>
            <div className='hero-image'>
              <img className='image' src={phoneImage}></img>
            </div>
          </div>

        </div>

      </main >
      {/* <footer className='footer-section'> 
      </footer>*/}
    </div >
  );
}

export default App;
