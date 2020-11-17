import React from 'react';
import '../styles/Home.css';

import Header from '../components/Header';
import MainBodyNav from '../components/MainBodyNav';
import Footer from '../components/Footer';

import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

class Home extends React.Component{
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


export default Home;