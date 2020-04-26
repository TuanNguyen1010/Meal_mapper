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
      await axios.get('/api/' + this.props.selectedDate,)
      .then (res => {
        if (res.data){
          console.log("res ingredents",res.data.recipe_one.image)
        this.setState({existingRecipe: true})
        this.setState({savedRecipeTitle: res.data.recipe_one.title})
        this.setState({savedRecipeIngredients: res.data.recipe_one.ingredients})
        this.setState({savedRecipeCalories: res.data.recipe_one.calories})
        this.setState({savedRecipeImage: res.data.recipe_one.image})
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

      <h3 className='more_search'>Search for another recipe to cook on {this.props.selectedDate}</h3>
      <RecipeSearcher selectedDate ={this.props.selectedDate} changeExistingRecipeState={this.changeExistingRecipeState}/>
    </div>
    ) : (
      <div>
      <h1>Search for a recipe</h1>
      <RecipeSearcher selectedDate ={this.props.selectedDate} changeExistingRecipeState={this.changeExistingRecipeState}/>
      </div>
    )
    return(
      <div> 
        {contents}
      </div>
    ) 
  }
}

export default Date;