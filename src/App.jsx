import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { BookGym } from "./components/BookGym/BookGym";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router basename="/gym-booking-frontend">
      <div className="app-container">
        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-gym" element={<BookGym />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="welcome-section">
      <h1 className="welcome-title">Welcome to UCD Gym Booking</h1>
      <p className="welcome-subtitle">
        Simple, fast, and reliable way to book your gym sessions at UCD
      </p>
      
      <div className="welcome-card">
        <h2>Never Miss a Gym Session Again</h2>
        <p>
          Our automated booking system ensures you get your preferred slot
          every time, without the hassle of manual booking.
        </p>
        
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-icon">⏱️</div>
            <h3>Save Time</h3>
            <p>Book your gym session in seconds, not minutes</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">🔔</div>
            <h3>Notifications</h3>
            <p>Get confirmation once your booking is complete</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">🔄</div>
            <h3>Automated</h3>
            <p>Let our bot handle the booking process for you</p>
          </div>
        </div>
        
        <Link to="/book-gym" className="cta-button">
          Book Your Gym Session Now
        </Link>
      </div>
    </div>
  );
}

export default App;