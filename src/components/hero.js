import phoneImage from '../assets/orbisphone.png';
import './hero.css';

export default function Hero() {
    return (
        <div className="hero">
            <div className='hero-wrapper'>
                <div className='hero-text-wrapper'>
                    <div className='text-container'>
                        <h1 className='header-text'>Know <br />Your<br /> Impact. <br />Change It.</h1>
                        <text className='hero-text'>Orbis helps you track your daily carbon footprint and turn awareness into real, measurable action — for a healthier planet and a better future.</text>
                        <button className='preregister-button'>Pre-Register</button>
                    </div>
                </div>
                <div className='hero-image'>
                    <img className='image' src={phoneImage}></img>
                </div>
                <button className='preregister-button-mobile'>Pre-Register</button>
            </div>

        </div>
    )
}