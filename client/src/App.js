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
      RecipeForDate: null
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
    console.log('APP: change date state to: ',this.state.selectedDate)
  }
  
  resetRecipeState = () => {
    this.setState({RecipeForDate: null})
  }
  
  homePage = () => {
    return <Home datePicked={this.datePicked} selectedDate={this.state.selectedDate} resetRecipeState={this.resetRecipeState}/> 
  }


  searchAllRecipeForDate = () => {
    this.state.AllRecipe.map((recipe)=> {
      if(recipe.date === this.state.selectedDate) {
        this.setState({RecipeForDate: recipe})
        console.log('run through searchALlRecipe')
        console.log('APP: recipe.date = ', recipe.date)
        console.log('APP: this.state.selected Date', this.state.selectedDate)
      }
    })
  }
    
  datePage = () => {
    return <SelectedDatePage 
    selectedDate={this.state.selectedDate} 
    RecipeForDate={this.state.RecipeForDate} 
    searchAllRecipeForDate={this.searchAllRecipeForDate} />
  }

  mealPlanPage = () => {
    return <MealPlanPage AllRecipe={this.state.AllRecipe} searchDB={this.searchDB}/> 
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
