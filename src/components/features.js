import './features.css'
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

export default function Features() {
    function Container({ text, paragraph }) {
        return (
            <div className='container'>
                <div className='textWrapper'>
                    <h1 className='titleText'>{text}</h1>
                    <p className='subTitle'>{paragraph}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="featureWrapper">
            <h1 className='headText'>How it works</h1>
            <div className='containerWrapper'>
                <Container
                    text={<>Complete Meaningful Tasks</>}
                    paragraph="Stay productive by completing daily tasks — whether it's studying, exercising, or helping others. Every task moves you forward." />
                <Container
                    text="Grow Your Virtual Forest"
                    paragraph="For each task you finish, a tree appears on your personal planet.
                    The more consistent you are, the greener your world becomes." />
                <Container
                    text={<>Track Your Eco-Impact</>}
                    paragraph="Watch your planet grow and see your streaks, productivity levels, and eco-score. Turn your habits into a living, growing forest." />
                <Container
                    text="Connect with the Community"
                    paragraph="Join a growing network of users who care about progress and the planet.
                    Share achievements, get inspired, and grow together." />
            </div>
        </div>
    )
}