import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import Navigation from './components/Navigation'


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
<Route path="/passenger" component={Passenger} />
export default App;
*/


class App extends Component {
  constructor(props) {
    super();
    this.state = {}
  }

  render() {
    return (
      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
      </Router>

    );
  }
}
export default App;