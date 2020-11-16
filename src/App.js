import React from 'react';

// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import MainBodyNav from './components/MainBodyNav';
import Footer from './components/Footer';
// import Work from './components/Work';

class App extends React.Component{
  render() {
    return <div className={"mainWrap"}>
      <BrowserRouter>
      
        <Header />
        <MainBodyNav />
        <Footer />
        
        <div className={"line"}>
            <span></span>
        </div>

      </BrowserRouter>
    </div>
  }
}


export default App;
