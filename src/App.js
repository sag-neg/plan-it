import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import Home from './layouts/home/Home';
import Routing from './Route';

function App() {
  return (
    <React.Fragment>
      <Routing/>
    </React.Fragment>
  );
}

export default App;
