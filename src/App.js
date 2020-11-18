import React from 'react';
import './App.css';
// import Header from './components/Header';
// import MainBodyNav from './components/MainBodyNav';
// import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Home from './Page/Home';
import Work from './Page/Work';
import About from './Page/About';
import ToyProj from './Page/ToyProject';

class App extends React.Component{
  render() {
    return <div className={"mainWrap"}>
      {/* <Home /> */}
      <BrowserRouter>

        <Switch>
          <Route exact path="/" component = { Home }/>
          <Route exact path = '/work' component = { Work }/>
          <Route exact path = '/about' component = { About }/>
          <Route exact path = '/toyproject' component = { ToyProj}/>
        </Switch>

      </BrowserRouter>
    </div>
  }
}


export default App;
