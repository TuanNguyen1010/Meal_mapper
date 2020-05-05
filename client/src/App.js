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
      selectedDate: '',
      AllRecipe: [],
      AllIngredients: [],
      RecipeForDate: [],
      existingRecipe: false
    }
  }

  componentDidMount() {
    this.searchDB()
  }
  
  resetState = () => {
    this.setState({existingRecipe: false})
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
  }
  
  resetRecipeState = () => {
    this.setState({
      RecipeForDate: null,
      existingRecipe: false
    })
    this.searchDB()
  }
  
  homePage = () => {
    return <Home 
    datePicked={this.datePicked} 
    selectedDate={this.state.selectedDate} 
    resetRecipeState={this.resetRecipeState}/> 
  }

  searchAllRecipeForDate = async () => {
    return await this.state.AllRecipe.map((recipe)=> {
      if(recipe.date === this.state.selectedDate) {
        return this.setState({
          RecipeForDate: recipe,
          existingRecipe: true
        })
      }
    })
  }
    
  datePage = () => {
    return <SelectedDatePage 
    selectedDate={this.state.selectedDate} 
    RecipeForDate={this.state.RecipeForDate} 
    searchAllRecipeForDate={this.searchAllRecipeForDate} 
    existingRecipe={this.state.existingRecipe}
    resetState={this.resetState}
    searchDB={this.searchDB}
    allRecipe={this.state.allRecipe}
    />
  }

  dateObjectFormatter = (year, month, day) => {
    const dateObject = new Date(year, month, day, 10, 33, 30, 0)
    return dateObject
  }

  mealPlanPage = () => {
    return <MealPlanPage 
    AllRecipe={this.state.AllRecipe} 
    searchDB={this.searchDB}
    dateObjectFormatter={this.dateObjectFormatter}
    /> 
  }

  render() {

  return (
    <div>
    <Router>
    <div className="App">
      <Nav> </Nav>
      <Route path='/' exact component={this.homePage}/>
      <Route path='/mealsPlan' component={this.mealPlanPage}/> 
      <Route path='/date/:dateId' component={this.datePage}/>
      <Route path='/shoppinglist' render={() => <ShoppingListPage loopDay={this.loopDay} AllRecipe={this.state.AllRecipe} AllIngredients={this.state.AllIngredients}/>}
      /> 
    </div>
    </Router>
    </div>
  );
}}

export default App;
