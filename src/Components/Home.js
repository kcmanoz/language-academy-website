import React from 'react';
import image from '../language.jpg';

function Home() {
    return (
        <div className="home-container">
            <img src={image} alt="Korean Language" className="home-image" />
            <h2 className="home-title">Welcome to the Korean Language Academy!</h2>
            <p className="home-subtitle">
                At the Korean Language Academy, we are dedicated to providing high-quality Korean language education to people from all walks of life. Our team of experienced teachers is passionate about helping our students achieve their language goals and succeed in their personal and professional lives.
            </p>
            <div className="home-section">
                <h3 className="home-section-title">What You Can Learn</h3>
                <ul className="home-section-list">
                    <li>Beginner to advanced Korean language skills</li>
                    <li>Practical vocabulary and grammar for everyday communication</li>
                    <li>Business Korean for professionals working in South Korea</li>
                    <li>Korean culture and customs</li>
                    <li>Effective communication strategies and techniques</li>
                </ul>
            </div>
            <div className="home-section">
                <h3 className="home-section-title">What You Can Achieve</h3>
                <ul className="home-section-list">
                    <li>Confidence in using Korean for everyday communication</li>
                    <li>Improved language proficiency for academic or professional purposes</li>
                    <li>Greater understanding and appreciation of South Korean culture</li>
                    <li>Expanded opportunities for work and travel in South Korea</li>
                </ul>
            </div>
            <div className="home-section">
                <h3 className="home-section-title">Our Teaching Philosophy</h3>
                <p className="home-section-text">
                    At the Korean Language Academy, we believe that language learning should be an engaging and enjoyable experience. Our student-centered approach emphasizes communicative competence, meaning that we prioritize real-world communication skills over memorization and grammar drills. Our teachers are trained to create a supportive and inclusive learning environment that encourages students to practice their Korean language skills and explore Korean culture with confidence and enthusiasm.
                </p>
            </div>
        </div>
    );
}

export default Home;