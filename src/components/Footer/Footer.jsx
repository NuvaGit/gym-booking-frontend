import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>UCD Gym Booking</h3>
          <p>The easiest way to secure your gym sessions at University College Dublin</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="https://en.wikipedia.org/wiki/Sean_Combs" target="_blank" rel="noopener">Sean  Combs</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Hype_man" target="_blank" rel="noopener">Big Zest</a></li>
            <li><a href="yurt on small horse " target="_blank" rel="noopener">yah</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Help & Support</h4>
          <ul className="footer-links">
            <li><a href="mailto:support@example.com">Report an Issue</a></li>
            <li><a href="https://github.com/yourusername/gym-booking-frontend" target="_blank" rel="noopener">GitHub</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} UCD Gym Booking. All rights reserved.</p>
        <p>Not officially affiliated with University College Dublin.</p>
      </div>
    </footer>
  );
};