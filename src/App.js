import React, {Component }  from 'react';
import './App.css';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/homePage'
import Date from './pages/SelectedDate'
import Nav from './nav/nav'

class App extends Component{

  render() {
  return (
    <Router>
    <div className="App">
      <Nav> </Nav>
      <Route path='/' exact component={Home}></Route>
      <Route path='/date/:dateId' component={Date}></Route>
      {/* <Home datePicked={this.datePicked}/>  */}
    </div>
    </Router>
  );
}}

export default App;
