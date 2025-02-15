import { useState } from "react";
import "./BookGym.css";

export const BookGym = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [logs, setLogs] = useState([]); // Store logs from backend

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

      // Check if the response status is OK
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
      setLogs(data.logs || []);
    } catch (error) {
      console.error("Booking error:", error);
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
      
      {logs.length > 0 && (
        <div className="logs">
          <h3>📜 Booking Logs:</h3>
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      )}
    </div>
  );
};
