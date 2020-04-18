import React, {Component }  from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/homePage'
import Recipes from './pages/recipes'
import Nav from './nav/nav'

class App extends Component{

  render() {
  return (
    <Router>
    <div className="App">
      <Nav> </Nav>
      <Route path='/' exact component={Home}></Route>
      <Route path='/date/:dateId' component={Recipes}></Route>
      {/* <Home datePicked={this.datePicked}/>  */}
    </div>
    </Router>
  );
}}

export default App;
