import React, {Component} from 'react'
import RecipeResult from './recipesSearchResult'
import useFetchRecipes from './useFetchRecipes'

class RecipeSearchBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchData: null,
      recipes: null,
      availableRecipes: false
    }
  }

  getSearch = async (e) => {
    e.preventDefault()
    const fetchedRecipes = await useFetchRecipes(this.state.searchData)
    console.log('fetched recipes = ' + fetchedRecipes)
    this.setState({recipes: fetchedRecipes})
    this.setState({availableRecipes: true})
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
    // const {recipes} = this.fetchRecipe(this.state.searchData)

    return (
      <div data-test='recipe-Search-Box'> 
      <form
          data-test='recipe-Search-Submit' 
          onSubmit={this.getSearch}
          className="search-form"
        >  
        <input className="search-input" 
          data-test='recipe-Search-Input'
          type="text" 
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