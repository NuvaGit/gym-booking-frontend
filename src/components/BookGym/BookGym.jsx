import { useState } from "react";
import "./BookGym.css";

export const BookGym = () => {
  const [username, setUsername] = useState("");
  const [browserType, setBrowserType] = useState("chromium");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async () => {
    if (!username) {
      setMessage("Please enter your UCD username!");
      setMessageType("warning");
      return;
    }

    setIsLoading(true);
    setMessage("Booking in progress...");
    setMessageType("loading");
    setLogs([]);

    try {
      const response = await fetch("https://riymhrkwkcadkcg4ksu7subw7q0ecefo.lambda-url.eu-north-1.on.aws/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, browserType }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
      setMessageType(data.message.includes("Error") ? "error" : "success");
      
      // Add timestamps to logs
      const logsWithTimestamp = (data.logs || []).map(log => ({
        text: log,
        timestamp: new Date().toLocaleTimeString()
      }));
      
      setLogs(logsWithTimestamp);
    } catch (error) {
      console.error("Booking error:", error);
      setMessage("Error connecting to the server. Please try again later.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  const getBrowserIcon = () => {
    switch (browserType) {
      case "chromium":
        return "🌍";
      case "firefox":
        return "🦊";
      case "webkit":
        return "🍏";
      default:
        return "🌍";
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <div className="booking-header">
          <h1>📅 UCD Gym Booking Bot</h1>
          <p>Let our automated system book your gym session in seconds</p>
        </div>
        
        <div className="booking-form">
          <div className="form-group">
            <label htmlFor="username">UCD Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your UCD username (e.g. john.smith)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="browserType">Select Browser</label>
            <select
              id="browserType"
              className="form-control browser-select"
              value={browserType}
              onChange={(e) => setBrowserType(e.target.value)}
            >
              <option value="chromium">🌍 Chromium (Default - Chrome/Edge)</option>
              <option value="firefox">🦊 Firefox</option>
              <option value="webkit">🍏 Safari (iPhone/macOS)</option>
            </select>
          </div>

          <button 
            className="submit-btn" 
            onClick={handleBooking}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Processing...
              </>
            ) : (
              <>Book My Gym Session</>
            )}
          </button>

          {message && (
            <div className={`message ${messageType}`}>
              {message}
            </div>
          )}
        </div>
      </div>

      {logs.length > 0 && (
        <div className="logs-container">
          <div className="logs-title">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 1H2C1.45 1 1 1.45 1 2V14C1 14.55 1.45 15 2 15H14C14.55 15 15 14.55 15 14V2C15 1.45 14.55 1 14 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 4H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M4 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M4 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Booking Process Logs
          </div>
          <div className="logs-content">
            {logs.map((log, index) => (
              <div key={index} className="log-entry">
                <span className="log-timestamp">[{log.timestamp}]</span>
                {log.text}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="booking-card">
        <div className="booking-form">
          <h2>How It Works</h2>
          <p>Our booking bot will:</p>
          <ol>
            <li>Login to your UCD Connect account automatically</li>
            <li>Navigate to the UCD Sport & Fitness booking system</li>
            <li>Book the earliest available gym slot for tomorrow</li>
            <li>Notify you once the booking is complete</li>
          </ol>
          
          <div className="message warning">
            <strong>Note:</strong> For security reasons, your credentials are only used temporarily during the booking process and are never stored.
          </div>
        </div>
      </div>
    </div>
  );
};