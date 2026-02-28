import { useState, useEffect } from 'react';
import '../styles/StatusIndicators.css';

function StatusIndicators() {
  const [voltage, setVoltage] = useState(220);
  const [temperature, setTemperature] = useState(35);
  const [power, setPower] = useState(85);

  useEffect(() => {
    const interval = setInterval(() => {
      setVoltage(prev => prev + (Math.random() - 0.5) * 2);
      setTemperature(prev => Math.max(30, Math.min(40, prev + (Math.random() - 0.5) * 0.5)));
      setPower(prev => Math.max(80, Math.min(90, prev + (Math.random() - 0.5) * 2)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const indicators = [
    {
      id: 1,
      title: 'Voltage',
      value: voltage.toFixed(1),
      unit: 'kV',
      status: voltage > 230 ? 'warning' : 'normal',
      icon: '⚡',
      range: 'Nominal: 220 kV'
    },
    {
      id: 2,
      title: 'Temperature',
      value: temperature.toFixed(1),
      unit: '°C',
      status: temperature > 38 ? 'warning' : 'normal',
      icon: '🌡️',
      range: 'Safe: < 40°C'
    },
    {
      id: 3,
      title: 'Load',
      value: power.toFixed(0),
      unit: '%',
      status: power > 88 ? 'warning' : 'normal',
      icon: '⚙️',
      range: 'Capacity: 500 MW'
    },
    {
      id: 4,
      title: 'Frequency',
      value: '50.0',
      unit: 'Hz',
      status: 'normal',
      icon: '〰️',
      range: 'Standard: 50 Hz'
    }
  ];

  return (
    <div className="status-indicators">
      {indicators.map(indicator => (
        <div key={indicator.id} className={`indicator-card ${indicator.status}`}>
          <div className="indicator-header">
            <span className="indicator-icon">{indicator.icon}</span>
            <h3>{indicator.title}</h3>
          </div>
          <div className="indicator-value">
            <span className="value">{indicator.value}</span>
            <span className="unit">{indicator.unit}</span>
          </div>
          <div className="indicator-range">{indicator.range}</div>
          <div className={`status-badge ${indicator.status}`}>
            {indicator.status === 'normal' ? 'Normal' : 'Warning'}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatusIndicators;
