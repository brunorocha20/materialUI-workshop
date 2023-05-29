import './App.css';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';

import NavBar from './components/NavBar';
import MUI from './components/MUI.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/material-ui" element={<MUI />} />
      </Routes>
    </div>
  );
}

export default App;
