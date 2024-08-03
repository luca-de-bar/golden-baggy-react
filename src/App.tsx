import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import InfoStrip from './components/InfoStrip';



import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <InfoStrip />
    </div>
  );
};

export default App;
