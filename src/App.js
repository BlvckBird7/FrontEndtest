import './App.css';
import Navbar1 from './components/navbarfiles/Navbar1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar2 from './components/navbarfiles/Navbar2';
import Home from './components/pages/Home'

function App() {
  return (
    <>
      <Router>
     <Navbar1 />
     <Navbar2 />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
