// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { Feed } from '@mui/icons-material';
import Feedback from './components/Feedback';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Feedback />
      <Contact />
    </div>
  );
}

export default App;
