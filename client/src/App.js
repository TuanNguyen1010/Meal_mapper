import React, {Component }  from 'react';
import './App.css';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/homePage'
import SelectedDatePage from './pages/selectedDatePage'
import MealPlanPage from './pages/mealPlanPage'
import Nav from './nav/nav'
import axios from 'axios'
import ShoppingListPage from './pages/shoppingListPage'

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


  searchAllRecipeForDate = () => {
    this.state.AllRecipe.map((recipe)=> {
      if(recipe.date == this.state.selectedDate) {
        this.setState({RecipeForDate: recipe})
      }
    })
  }

    
  dateComponent = () => {
    return <SelectedDatePage selectedDate={this.state.selectedDate} RecipeForDate={this.state.RecipeForDate} searchAllRecipeForDate={this.searchAllRecipeForDate} />
  }

  mealPlanPage = () => {
    return <MealPlanPage AllRecipe={this.state.AllRecipe} searchDB={this.searchDB}/> 
  }


  render() {

  return (
    <Router>
    <div className="App">
      <Nav> </Nav>
      <Route path='/' exact component={this.homeComponent}></Route>
      <Route path='/mealsPlan' component={this.mealPlanPage}/> 
      <Route path='/date/:dateId' component={this.dateComponent}></Route>
      <Route path='/shoppinglist' render={() => <ShoppingListPage/>}/> 
    </div>
    </Router>
  );
}}

export default App;
