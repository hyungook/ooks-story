import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBodyNav from './components/MainBodyNav';
import Footer from './components/Footer';

class App extends React.Component{
  render() {
    return <div className={"mainWrap"}>
      <Header />
      <MainBodyNav />
      <Footer />
      <div className={"line"}>
          <span></span>
      </div>
    </div>
  }
}


export default App;
