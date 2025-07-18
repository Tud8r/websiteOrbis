import { useState } from 'react';
import './points.css';
import { motion, AnimatePresence } from 'framer-motion';

function Item({ text = "Default Title", paragraph, isOpen, onClick }) {
    return (
        <motion.div
            layout
            transition={{ layout: { duration: 0.6, type: "spring" } }}
            className='pointContainer'
            onClick={onClick}
        >
            <motion.div className='HeadContainer'>
                <motion.h1 layout="position" className='pointHeader'>{text}</motion.h1>
                <motion.div>{isOpen ? "-" : "+"}</motion.div>
            </motion.div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p className='pointContent'>
                            {paragraph || "Unlike other carbon apps, Orbis creates a living planet that evolves as you take real-world eco-actions making sustainability feel personal and rewarding."}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function Points() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(prev => prev === index ? null : index);
    };
    const items = [
        {
            text: "🌍 A Virtual Planet That Grows With You",
            paragraph: "Unlike other carbon apps, Orbis creates a living planet that evolves as you take real-world eco-actions—making sustainability feel personal and rewarding."
        },
        {
            text: "📡 Powered by Data & Satellites",
            paragraph: "We go beyond guesswork. Orbis uses satellite data, real-time mobility insights, and utility integrations to give you accurate, localized eco-tasks."
        },
        {
            text: "🎯 Personalized Challenges, Real Impact",
            paragraph: "Your journey is yours alone. Orbis tailors challenges to your lifestyle, so you can take small, meaningful steps that actually matter."
        },
        {
            text: "🏆 Points, Leaderboards & Social Good",
            paragraph: "Earn eco-points, compete with friends, climb the leaderboard—and see your daily choices create real change."
        },
        {
            text: "🧠 Climate Education Meets Fun",
            paragraph: "With quizzes, resources, and habit trackers, Orbis makes learning about sustainability as easy as scrolling your feed."
        }
    ];

    return (
        <section>
            <h1 className='pointTitle'>What sets Orbis apart?</h1>
            <div className="pointWrapper">
                {items.map((item, index) => (
                    <Item
                        key={index}
                        text={item.text}
                        paragraph={item.paragraph}
                        isOpen={openIndex === index}
                        onClick={() => toggleItem(index)}
                    />
                ))}
            </div>
        </section>
    );
}
