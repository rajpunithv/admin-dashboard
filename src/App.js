import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Charts from './pages/Charts';
import Kanban from './pages/Kanban';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

