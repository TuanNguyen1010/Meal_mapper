import React, {Component} from 'react'
import RecipeResult from './recipesSearchResult'
import axios from 'axios'

class RecipeSearchBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchData: null,
      recipes: null,
      availableRecipes: false
    }
  }
  grabRecipe = async () => {
    const APP_ID = "a3ad555a"
    const API_KEY = "b9c79644c2f78df9d76f77fc33c0fa24"
    await axios.get(`https://api.edamam.com/search?q=${this.state.searchData}&app_id=${APP_ID}&app_key=${API_KEY}`)
    .then( res => {
    this.setState({recipes: res.data.hits})
    this.setState({availableRecipes: true})
    })
  }

  getSearch = (e) => {
    e.preventDefault()
    this.grabRecipe()
  }

  loadRecipe = () => {
    if (this.state.availableRecipes){
    return this.state.recipes.map((recipe, key) => (
      <RecipeResult 
        key={key}
        title={recipe.recipe.label} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        healthLabels={recipe.recipe.healthLabels}
        url={recipe.recipe.url}
        selectedDate ={this.props.selectedDate}
        searchAllRecipeForDate={this.props.searchAllRecipeForDate}
        resetState={this.props.resetState}
        searchDB={this.props.searchDB}
      />
      ))
    }}
  render() {
    return (
      <div data-test='recipe-Search-Box'> 
      <form
          data-test='recipe-Search-Submit' 
          onSubmit={this.getSearch}
          className="search-form"
        >  
        <input className="search-input" 
          data-test='recipe-Search-Input'
          type ="text" 
          onChange={ async (e) => {
            await this.setState({searchData: e.target.value})
          }}
        />
        <button
          className="search-button" 
          type="submit"
        >
          Search
        </button>
        </form>
        <div className="All_recipe_container">
        {this.loadRecipe()}
        </div>
      </div>
    )
  
  }
}

export default RecipeSearchBox