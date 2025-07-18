import './motive.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import fetureImage from '../assets/features.png'
export default function Motive() {
    return (
        <section className="wrapper">
            <div className="headText">
                Why We Built Orbis
            </div>
            <div className='info'>
                <p className='text'>“We built Orbis to turn everyday tasks into environmental progress.”

                    Our mission is to help people build sustainable habits by making eco-friendly actions feel visual and rewarding. As students, we wanted to create something that combines productivity, climate awareness, and a bit of fun.

                    Every completed task helps your digital planet grow—because real change starts with small steps.</p>
                <div className='imgWrapper'>
                    <img className="featureImage" src={fetureImage}></img>
                </div>
            </div>
        </section>
    )
}