import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { BookGym } from "./components/BookGym/BookGym";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-gym" element={<BookGym />} />
      </Routes>
    </Router>
  );
}

const Home = () => (
  <div className="container">
    <h1>Welcome to My Portfolio</h1>
    <p>This is a React + Vite project with Gym Booking functionality.</p>
  </div>
);

export default App;
