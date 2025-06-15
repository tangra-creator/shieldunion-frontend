import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'; // 👈 use your actual filename
import Navbar from './components/Navbar'; // Optional if you created it
import SubmitCase from './pages/SubmitCase';

function App() {
  return (
    <Router>
      <Navbar /> {/* Optional but useful */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submit" element={<SubmitCase />} />
      </Routes>
    </Router>
  );
}

export default App;
