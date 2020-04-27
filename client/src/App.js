import React, {Component }  from 'react';
import './App.css';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/homePage'
import SelectedDatePage from './pages/selectedDatePage'
import MealPlanPage from './pages/mealPlanPage'
import Nav from './nav/nav'
import axios from 'axios'

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      selectedDate: '2020-04-16',
      AllRecipe: []
    }
  }

  componentDidMount() {
    this.searchDB()
  }


  searchDB = async () => {
    await axios.get('/api/')
    .then (res => {
      console.log('this is working')
      this.setState({
        AllRecipe: res.data
      })
    })
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

  mealPlanPage = () => {
    return <MealPlanPage AllRecipe={this.state.AllRecipe}/> 
  }

  render() {
  return (
    <Router>
    <div className="App">
      <Nav> </Nav>
      <Route path='/' exact component={this.homeComponent}></Route>
      <Route path='/mealsPlan' component={this.mealPlanPage}/> 
      <Route path='/date/:dateId' component={this.dateComponent}></Route>
    </div>
    </Router>
  );
}}

export default App;
