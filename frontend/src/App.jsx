import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import FormContainer from './FormContainer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50/50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/predict" element={<FormContainer />} />
          
        </Routes>
        {/* <FormContainer /> */}

      </div>
    </Router>
  );
}

export default App;

