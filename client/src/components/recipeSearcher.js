import React, {Component} from 'react'
import Recipe from '../components/recipes'

class RecipeSearcher extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchData: null,
      query: "chicken",
      recipes: null,
      avail: false
    }
  }
  grabRecipe = async () => {
    const APP_ID = "a3ad555a"
    const API_KEY = "b9c79644c2f78df9d76f77fc33c0fa24"
    const response = await fetch(`https://api.edamam.com/search?q=${this.state.searchData}&app_id=${APP_ID}&app_key=${API_KEY}`).then(response => response.json())
    this.setState({recipes: response.hits})
    this.setState({avail: true})
    // this.props.setRecipe(response)
    console.log( this.state.recipes)
  }

  getSearch = (e) => {
    e.preventDefault()
    this.grabRecipe()
    console.log(this.props.selectedDate)
    console.log('happy')
    // this.searchDB()
  }

  loadRecipe = () => {
    if (this.state.avail)
    return this.state.recipes.map((recipe, key) => (
      <Recipe 
        key={key}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredientLines.map(ingre => ( ingre ))}
        selectedDate ={this.props.selectedDate}
      />
      ))
  }
  render() {
    return (
      <div> 
      <h1>Search for a recipe</h1>
      <form 
          onSubmit={this.getSearch}
          className="search-form"
        >  
        <input className="search-input" 
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
        <div>
        {this.loadRecipe()}
        </div>
      </div>
    )
  
  }
}

export default RecipeSearcher