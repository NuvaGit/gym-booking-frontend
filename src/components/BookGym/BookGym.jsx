import { useState } from "react"; // ✅ Removed unused 'React' import
import "./BookGym.css";

export const BookGym = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [logs, setLogs] = useState([]); // ✅ Store logs from backend

  const handleBooking = async () => {
    if (!username) {
      setMessage("⚠ Please enter your UCD username!");
      return;
    }

    setMessage("🔄 Booking in progress...");

    try {
      const response = await fetch("https://gym-booking-backend.onrender.com/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();
      setMessage(data.message);
      setLogs(data.logs || []); 
    // eslint-disable-next-line no-unused-vars
    } catch (_error) {
      setMessage("❌ Error connecting to the server.");
    }
  };

  return (
    <div className="container">
      <h1>📅 UCD Gym Booking Bot</h1>
      <input
        type="text"
        placeholder="Enter UCD Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleBooking}>Book Gym</button>
      {message && <p>{message}</p>}
      
      <div className="logs">
        {logs.length > 0 && <h3>📜 Booking Logs:</h3>}
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
};
