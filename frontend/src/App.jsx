import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'; // 👈 use your actual filename
import Navbar from './components/Navbar'; // Optional if you created it

function App() {
  return (
    <Router>
      <Navbar /> {/* Optional but useful */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
