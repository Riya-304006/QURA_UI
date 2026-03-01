function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-brand">QURA</h3>
                    <p className="footer-tagline">Say No to Queue</p>
                    <p className="footer-description">
                        Smart AI-powered queue management for modern clinics
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <ul className="footer-contact">
                        <li>📧 support@qura.health</li>
                        <li>📞 +1 (555) 123-4567</li>
                        <li>📍 Healthcare Innovation Hub</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} QURA. All rights reserved.</p>
                <p className="footer-credits">Built with ❤️ for better healthcare</p>
            </div>
        </footer>
    )
}

export default Footer
