import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    © 2023 Korean Language Academy. All rights reserved.
                </p>
                <ul className="footer-menu">
                    <li className="footer-item">
                        <a href="/terms" className="footer-link">
                            Terms and Conditions
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="/privacy" className="footer-link">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
