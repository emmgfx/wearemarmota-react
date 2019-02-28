import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './sections/Home';
import UiUx from './sections/UiUx';

import './scss/style.scss';

class App extends Component {
  render() {
    return (
        <Router>
            <React.Fragment>
                
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/ui-ux" component={UiUx} />
                <Footer />
                
            </React.Fragment>
        </Router>
    );
  }
}

export default App;
