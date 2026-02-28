import Navbar from './Navbar';
import StatusIndicators from './StatusIndicators';
import CameraGrid from './CameraGrid';
import AlertPanel from './AlertPanel';
import PowerControl from './PowerControl';
import Footer from './Footer';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />

      <main className="dashboard-main">
        <StatusIndicators />

        <div className="dashboard-grid">
          <div className="grid-left">
            <CameraGrid />
          </div>

          <div className="grid-right">
            <AlertPanel />
          </div>
        </div>

        <PowerControl />
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;
