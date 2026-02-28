import { useState, useEffect } from 'react';
import '../styles/AlertPanel.css';

function AlertPanel() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'warning',
      title: 'High Temperature Detected',
      location: 'Transformer Bay - Section A',
      time: new Date(Date.now() - 5 * 60000),
      severity: 'medium',
      resolved: false
    },
    {
      id: 2,
      type: 'critical',
      title: 'Smoke Detection Alert',
      location: 'Switchgear Area - Section B',
      time: new Date(Date.now() - 15 * 60000),
      severity: 'high',
      resolved: false
    },
    {
      id: 3,
      type: 'info',
      title: 'Maintenance Scheduled',
      location: 'Control Room',
      time: new Date(Date.now() - 30 * 60000),
      severity: 'low',
      resolved: true
    },
    {
      id: 4,
      type: 'warning',
      title: 'Voltage Fluctuation',
      location: 'Main Transformer',
      time: new Date(Date.now() - 45 * 60000),
      severity: 'medium',
      resolved: true
    }
  ]);

  const [filter, setFilter] = useState('all');

  const getAlertIcon = (type) => {
    switch(type) {
      case 'critical': return '🔥';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📋';
    }
  };

  const getTimeAgo = (date) => {
    const minutes = Math.floor((Date.now() - date) / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  const filteredAlerts = filter === 'all'
    ? alerts
    : filter === 'active'
    ? alerts.filter(a => !a.resolved)
    : alerts.filter(a => a.resolved);

  const handleResolve = (id) => {
    setAlerts(alerts.map(alert =>
      alert.id === id ? { ...alert, resolved: true } : alert
    ));
  };

  return (
    <div className="alert-panel">
      <div className="section-header">
        <h2>🚨 Alert Dashboard</h2>
        <div className="alert-stats">
          <span className="stat critical">{alerts.filter(a => !a.resolved && a.type === 'critical').length} Critical</span>
          <span className="stat warning">{alerts.filter(a => !a.resolved && a.type === 'warning').length} Warning</span>
        </div>
      </div>

      <div className="alert-filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All ({alerts.length})
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          Active ({alerts.filter(a => !a.resolved).length})
        </button>
        <button
          className={filter === 'resolved' ? 'active' : ''}
          onClick={() => setFilter('resolved')}
        >
          Resolved ({alerts.filter(a => a.resolved).length})
        </button>
      </div>

      <div className="alerts-list">
        {filteredAlerts.map(alert => (
          <div key={alert.id} className={`alert-item ${alert.type} ${alert.resolved ? 'resolved' : ''}`}>
            <div className="alert-icon">{getAlertIcon(alert.type)}</div>

            <div className="alert-content">
              <div className="alert-header">
                <h4>{alert.title}</h4>
                <span className={`severity-badge ${alert.severity}`}>
                  {alert.severity}
                </span>
              </div>
              <p className="alert-location">📍 {alert.location}</p>
              <span className="alert-time">{getTimeAgo(alert.time)}</span>
            </div>

            {!alert.resolved && (
              <button
                className="resolve-btn"
                onClick={() => handleResolve(alert.id)}
              >
                ✓ Resolve
              </button>
            )}

            {alert.resolved && (
              <div className="resolved-badge">✓ Resolved</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlertPanel;
