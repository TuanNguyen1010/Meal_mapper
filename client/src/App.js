import React, {Component }  from 'react';
import './App.css';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/homePage'
import SelectedDatePage from './pages/selectedDatePage'
import Nav from './nav/nav'

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      selectedDate: '2020-04-16',
    }
  }
  datePicked = async (date) => {
    await this.setState( {selectedDate: date})
    console.log(this.state.selectedDate)
  }

  homeComponent = () => {
    return <Home datePicked={this.datePicked}/> 
  }

  dateComponent = () => {
    return <SelectedDatePage selectedDate={this.state.selectedDate}/>
  }

  render() {
  return (
    <Router>
    <div className="App">
      <Nav> </Nav>
      <Route path='/' exact component={this.homeComponent}></Route>
      <Route path='/date/:dateId' component={this.dateComponent}></Route>
    </div>
    </Router>
  );
}}

export default App;
