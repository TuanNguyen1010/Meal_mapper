import React, {Component} from 'react'
import RecipeSearcher from '../components/recipeSearcher'
import axios from 'axios'

class Date extends Component {
    constructor(props){
      super(props)
      this.searchDB()
      this.state = {
        searchData: null,
        query: "chicken",
        recipes: null,
        avail: false,
        existingRecipe: false,
        savedRecipeTitle: '',
        savedRecipeIngredients: [],
        savedRecipeCalories: 0,
        savedRecipeImage: ''
      }
    }

    changeExistingRecipeState = () => {
      this.searchDB()
      this.setState({existingRecipe: true})
    }

    searchDB = async () => {
      await axios.get('http://localhost:8000/recipe/findByDate/' + this.props.selectedDate,)
      .then (res => {
        if (res.data){
        this.changeExistingRecipeState()
        this.setState({savedRecipeTitle: res.data.title})
        this.setState({savedRecipeIngredients: res.data.ingredients})
        this.setState({savedRecipeCalories: res.data.calories.toFixed(0)})
        this.setState({savedRecipeImage: res.data.image})
        }
      })
    }

  render() {
    const contents = this.state.existingRecipe ? (
    <div> 
      Saved recipe for {this.props.selectedDate}
      <h1>{this.state.savedRecipeTitle } </h1>
      <h3> Calories: {this.state.savedRecipeCalories}</h3>
      <img src={this.state.savedRecipeImage} alt=""/> 
      <h3> {this.state.savedRecipeIngredients.map((ingredients)=> (
        <div> {ingredients}</div>
      ))}</h3>
    
    </div>
    ) : (
      <RecipeSearcher selectedDate ={this.props.selectedDate} changeExistingRecipeState={this.changeExistingRecipeState}/>
    )
    return(
      <div> 
        {contents}
      </div>
    ) 
  }
}

export default Date;