import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="logo-icon">⚡</div>
        <h1>Substation Monitor</h1>
      </div>

      <div className="navbar-info">
        <div className="info-item">
          <span className="info-label">Station ID:</span>
          <span className="info-value">SS-2024-A</span>
        </div>
        <div className="info-item">
          <span className="info-label">Location:</span>
          <span className="info-value">Grid Sector 7</span>
        </div>
        <div className="info-item">
          <span className="info-label">Time:</span>
          <span className="info-value">{currentTime.toLocaleTimeString()}</span>
        </div>
      </div>

      <div className="navbar-status">
        <div className="status-indicator online">
          <span className="status-dot"></span>
          System Online
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
