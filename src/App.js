import React from 'react';
import './App.css';
// import Header from './components/Header';
// import MainBodyNav from './components/MainBodyNav';
// import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Home from './Page/Home';
import Work from './components/Work';

class App extends React.Component{
  render() {
    return <div className={"mainWrap"}>
      {/* <Home /> */}
      <BrowserRouter>

        <Switch>
          <Route exact path="/" component = { Home }/>
          <Route exact path = '/work' component = { Work }/>
        </Switch>

      </BrowserRouter>
    </div>
  }
}


export default App;
