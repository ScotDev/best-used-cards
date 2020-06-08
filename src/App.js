import React from 'react';
import './styles.min.css';

import Navbar from './components/layout/Navbar';
import ShowcaseCarousel from './components/layout/ShowcaseCarousel'
import MainContent from './components/layout/MainContent'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <div className="content">
          <ShowcaseCarousel></ShowcaseCarousel>
          <MainContent></MainContent>
        </div>
      </div>
    </div>
  );
}

export default App;