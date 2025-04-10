import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CharacterForm from './components/CharacterForm';
import DialogPage from './components/DialogPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dialog">Dialog Page</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/dialog" element={<DialogPage />} />
          <Route path="/" element={<CharacterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
