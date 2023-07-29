import React from 'react';
import image from '../Images/language-lesson.jpg';

function Home() {
    return (
        <div className="home-container">
            <div className="home-header">
                <div className="home-title-container">
                    <h1 className="home-title">Welcome to the Korean Language Academy!</h1>
                    <p className="home-subtitle">Learn Korean language with experienced instructors and immerse yourself in the Korean culture.</p>
                </div>
                <img src={image} alt="Korean Language Lesson" className="home-image" />
            </div>
            <div className="home-section">
                <h2 className="home-section-title">What We Offer</h2>
                <ul className="home-section-list">
                    <li>Comprehensive Korean language courses for beginners to advanced learners</li>
                    <li>Practical vocabulary and grammar for everyday communication</li>
                    <li>Business Korean for professionals working in South Korea</li>
                    <li>Intensive Korean language programs for academic or professional purposes</li>
                    <li>Cultural immersion experiences to enhance language learning</li>
                </ul>
            </div>
            <div className="home-section">
                <h2 className="home-section-title">Why Choose Us</h2>
                <ul className="home-section-list">
                    <li>Experienced and qualified instructors dedicated to student success</li>
                    <li>Flexible course schedules to accommodate busy lifestyles</li>
                    <li>Innovative teaching methods to make language learning engaging and enjoyable</li>
                    <li>Supportive and inclusive learning environment that fosters confidence and enthusiasm</li>
                    <li>Access to a vibrant Korean language and cultural community</li>
                </ul>
            </div>
            <div className="home-section">
                <h2 className="home-section-title">Our Teaching Philosophy</h2>
                <p className="home-section-text">
                    At the Korean Language Academy, we believe that language learning is an enriching and transformative experience. We prioritize communicative competence, which means we teach our students how to use Korean in real-world situations rather than just memorizing vocabulary and grammar rules. Our instructors are trained to create a dynamic and supportive learning environment that encourages active participation and fosters cultural appreciation.
                </p>
            </div>
        </div>
    );
}

export default Home;