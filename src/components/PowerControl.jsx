import { useState, useEffect } from 'react';
import '../styles/PowerControl.css';
import ActivityLog from './ActivityLog'; 

function PowerControl() {

  const [sections, setSections] = useState([
    { id: 1, name: 'Main Grid', status: 'on', load: 85, icon: '🔌' },
    { id: 2, name: 'Transformer A', status: 'on', load: 67, icon: '⚡' },
    { id: 3, name: 'Transformer B', status: 'on', load: 92, icon: '⚡' },
    { id: 4, name: 'Backup Generator', status: 'standby', load: 23, icon: '🔋' },
    { id: 5, name: 'Cooling System', status: 'on', load: 46, icon: '❄️' },
    { id: 6, name: 'Emergency Lights', status: 'on', load: 12, icon: '💡' }
  ]);

  const [showConfirm, setShowConfirm] = useState(null);
  const [toast, setToast] = useState(null);
  const [logs, setLogs] = useState([]);

  /* ---------- LOG ---------- */
  const addLog = (message, type = "normal") => {
    const time = new Date().toLocaleTimeString();

    setLogs(prev => [
      { id: Date.now(), time, message, type },
      ...prev
    ]);
  };

  /* ---------- TOAST ---------- */
  const showToast = (name, isOn) => {
    const message = `${name} powered ${isOn ? "ON" : "OFF"}`;

    setToast({
      message,
      description: "Remote switching command executed",
      type: isOn ? "success" : "danger"
    });

    addLog(message);

    setTimeout(() => setToast(null), 3000);
  };

  const toggleSection = (id) => {

    setSections(sections.map(section => {
      if (section.id === id) {

        const newStatus =
          section.status === 'on' ? 'off' : 'on';

        showToast(section.name, newStatus === 'on');

        return {
          ...section,
          status: newStatus,
          load: newStatus === 'off' ? 0 : section.load
        };
      }
      return section;
    }));

    setShowConfirm(null);
  };

  const handleEmergencyShutdown = () => {
    if (window.confirm(
      '⚠️ EMERGENCY SHUTDOWN\n\nThis will turn off all non-essential systems. Continue?'
    )) {

      setSections(sections.map(section => {
        if (
          section.name !== 'Emergency Lights' &&
          section.name !== 'Backup Generator'
        ) {
          return { ...section, status: 'off', load: 0 };
        }
        return section;
      }));

      const msg = "🚨 Emergency Shutdown Activated";

      setToast({
        message: msg,
        description:
          "Turn on all systems manually after resolving the issue.",
        type: "emergency"
      });

      addLog(msg, "emergency");

      setTimeout(() => setToast(null), 4000);
    }
  };

  /* ================= REALTIME TELEMETRY ================= */

useEffect(() => {
  const systems = [
    "Voltage stable",
    "Thermal sensors calibrated",
    "Grid frequency normal",
    "AI anomaly scan completed",
    "Network heartbeat OK",
    "Transformer diagnostics passed"
  ];

  const interval = setInterval(() => {
    const random =
      systems[Math.floor(Math.random() * systems.length)];

    addLog(`⚙️ ${random}`);
  }, 9000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="dashboard-layout">

      {/* ===== LEFT SIDE ===== */}
      <div className="dashboard-main">
        <div className="power-control">

          {/* TOAST */}
          {toast && (
            <div className={`custom-toast ${
              toast.type === "emergency"
                ? "center-toast"
                : toast.type
            }`}>
              <div className="toast-dot"></div>
              <div>
                <p className="toast-title">{toast.message}</p>
                <span className="toast-desc">{toast.description}</span>
              </div>
            </div>
          )}

          {/* HEADER */}
          <div className="section-header">
            <h2>⚡ Power Control Center</h2>
            <button
              className="emergency-btn"
              onClick={handleEmergencyShutdown}
            >
              🚨 Emergency Shutdown
            </button>
          </div>

          {/* GRID */}
          <div className="control-grid">
            {sections.map(section => (
              <div key={section.id} className={`control-card ${section.status}`}>

                <div className="control-header">
                  <span className="control-icon">{section.icon}</span>
                  <h3>{section.name}</h3>
                </div>

                <div className={`status-indicator ${section.status}`}>
                  <span className="status-dot"></span>
                  {section.status === 'on'
                    ? 'Online'
                    : section.status === 'standby'
                      ? 'Standby'
                      : 'Offline'}
                </div>

                <div className="control-meter">
                  <div className="meter-label">
                    <span>Load</span>
                    <span className='meter-value'>{section.load}%</span>
                  </div>

                  <div className="meter-bar">
                    <div
                      className="meter-fill"
                      style={{
                        width: `${section.load}%`,
                        backgroundColor: section.load > 90 ? '#d31212ff' : section.load > 75 ? '#f5700bff' : section.load > 65 ? '#f5be0bff' : section.load > 40 ? '#22cd8fff' : '#19eb24ff'
                      }}
                    />
                  </div>
                </div>

                <div className="control-actions"> {showConfirm === section.id ? ( 
                    <div className="confirm-dialog"> <p>Confirm action?</p> 
                    <div className="confirm-buttons"> <button 
                    className="confirm-yes" 
                    onClick={() => 
                        toggleSection(section.id)} 
                        > 
                        Yes 
                        </button> 
                        <button 
                        className="confirm-no" 
                        onClick={() => 
                            setShowConfirm(null)} 
                            > No 
                            </button> 
                            </div> 
                            </div> 
                            ) : ( 
                            <button 
                            className={`toggle-btn ${section.status}`}
                            onClick={() => 
                                setShowConfirm(section.id)} 
                                > 
                                {section.status === 'on' 
                                ? '⏸️ Turn Off'
                                 : '▶️ Turn On'} 
                                 </button>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ===== RIGHT SIDE ===== */}
      <div className="dashboard-side">
        <ActivityLog logs={logs} />
      </div>

    </div>
  );
}

export default PowerControl;