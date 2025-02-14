import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { BookGym } from "./components/BookGym/BookGym";
import "./App.css";

function App() {
  return (
    <Router basename="/gym-booking-frontend">  {/* Fix for GitHub Pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to UCD Gym Booking</h1>} />
        <Route path="/book-gym" element={<BookGym />} />
      </Routes>
    </Router>
  );
}

export default App;
