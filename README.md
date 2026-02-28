# ⚡ SMART SUBSTATION SURVEILLANCE AND REMOTE SWITCHING SYSTEM USING ESP32-CAM

A real-time electrical substation monitoring and remote power control dashboard developed as a **Final Year Project** by Electrical and Electronics Engineering students.

This application simulates an industrial **Smart Substation Control System**, enabling live monitoring, alert visualization, and remote switching operations through an interactive web interface.

---

## 📌 Project Overview

Electrical substations contain high-voltage equipment where manual inspection during faults can be dangerous.  
This project introduces a **Smart Surveillance and Remote Switching System** that allows operators to:

- Monitor substations remotely using camera feeds
- Detect abnormal conditions
- Receive alerts instantly
- Control electrical power remotely
- Prevent human exposure to hazardous environments

The dashboard represents how the ESP32-CAM based hardware system operates in real-world scenarios.

---

## 🚀 Live Application

🔗 **Live Demo:**  
https://smart-substation-monitor.netlify.app

---

## 🧠 Key Features

✅ Live Camera Monitoring Dashboard  
✅ Alert Detection Panel  
✅ Remote Power Control System  
✅ Emergency Shutdown Mechanism  
✅ Real-time Activity Log  
✅ Toast Notifications  
✅ Control Room Style UI  
✅ Responsive Industrial Dashboard Design  
✅ Real-time Telemetry Simulation

---

## 🖥️ Technologies Used

### Frontend
- React.js (Vite)
- JavaScript (ES6+)
- CSS3
- React Hooks

### UI & Libraries
- React Icons
- Custom CSS Animations
- Responsive Grid Layout

### Deployment
- GitHub
- Netlify Hosting

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      HARDWARE LAYER                             │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────────────┐    │
│  │  ESP32-CAM    │  │  Sensors     │  │  Relay Module      │    │
│  │  (Camera)     │  │  (Temp/Fire) │  │  (Power Control)   │    │
│  └──────┬───────┘  └──────┬───────┘  └────────┬───────────┘    │
└─────────┼─────────────────┼───────────────────┼────────────────┘
          │                 │                   │
          ▼                 ▼                   ▼
┌─────────────────────────────────────────────────────────────────┐
│              COMMUNICATION LAYER (Wi-Fi Module)                 │
│                    Wireless Data Transfer                       │
└─────────────────────────┬───────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│               WEB-BASED DASHBOARD (React.js)                    │
│                                                                 │
│  ┌────────────────┐ ┌──────────────┐ ┌───────────────────┐     │
│  │ 📹 Live Camera │ │ 📊 Sensor    │ │ 🔌 Remote Power   │     │
│  │   Monitoring   │ │   Panel      │ │   Control         │     │
│  └────────────────┘ └──────────────┘ └───────────────────┘     │
│  ┌────────────────┐ ┌──────────────┐                           │
│  │ 🚨 Alert       │ │ 📱 Mobile    │                           │
│  │   Notifications│ │   Alerts     │                           │
│  └────────────────┘ └──────────────┘                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📷 Application Modules

### 🎥 Live Camera Monitoring
Displays real-time surveillance feeds from different substation zones using ESP32-CAM.
Provides remote visibility of high-voltage equipment and restricted areas.

### 🚨 Alert Dashboard
Shows anomaly detection and safety alerts.

### ⚡ Power Control Center
Allows remote ON/OFF switching of electrical sections with confirmation logic.

### 📜 Activity Log Panel
Records all system actions with:
- Auto-scroll
- Blink effect for new events
- Real-time telemetry updates

---

## 👨‍💻 Project Developed By

- **PRABAVATHI S**
- **ASVITHA S**

Final Year – Electrical and Electronics Engineering

---

## 🏫 Institution Details

**CHENNAI INSTITUTE OF TECHNOLOGY**  
Sarathy Nagar, Kundrathur  
Chennai – 600069  

**Department of Electrical and Electronics Engineering**

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Kubendiran2003/smart-substation-monitor.git