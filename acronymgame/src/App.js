import './App.css';
import React from 'react';
import { useNavigate, useLocation, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import FindaGame from "./pages/FindaGame";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <HomePage location={location} />
      <FindaGame location={location} />
    </div>
  );
}

export default App;
