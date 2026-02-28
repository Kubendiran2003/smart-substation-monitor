import { useEffect, useRef, useState } from "react";
import "../styles/ActivityLog.css";

function ActivityLog({ logs }) {
  const containerRef = useRef(null);
  const [highlightId, setHighlightId] = useState(null);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    /* Blink newest */
    if (logs.length > 0) {
      setHighlightId(logs[0].id);

      const timer = setTimeout(() => {
        setHighlightId(null);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [logs]);

  /* ================= TYPE COLOR ================= */
  const getTypeClass = (message) => {
    if (message.includes("Emergency Shutdown"))
      return "log-emergency";

    if (message.includes("ON"))
      return "log-on";

    if (message.includes("OFF"))
      return "log-off";

    return "log-normal";
  };

  return (
    <div className="activity-panel">
      <h3 className="activity-title">📜 Activity Log</h3>

      <div ref={containerRef} className="activity-list">
        {logs.map((log) => (
          <div
            key={log.id}
            className={`activity-item 
              ${getTypeClass(log.message)}
              ${highlightId === log.id ? "blink" : ""}
            `}
          >
            <span className="log-time">[{log.time}]</span>
            <p className="log-message">{log.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityLog;