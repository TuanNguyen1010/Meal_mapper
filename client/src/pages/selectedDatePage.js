import React, {Component} from 'react'
import RecipeSearchBox from '../components/recipeSearchBox'
import ExistingRecipe from '../components/existingRecipe'
import { Redirect } from 'react-router-dom'

class Date extends Component {
    constructor(props){
      super(props)
      this.props.searchAllRecipeForDate()
      this.state = {
        searchData: null,
        query: "chicken",
        recipes: null,
        avail: false,
        existingRecipe: false,
    }}

    changeExistingRecipeState = async () => {
      await this.props.searchAllRecipeForDate()
      this.setState({existingRecipe: true})
    }

    renderRedirectToHome = () => {
      if (this.props.selectedDate === '') {
        return <Redirect to={'/'}  />
      } else {
        
      }
    }

    
  render() {
    const contents = this.props.RecipeForDate ? (
    <div> 
      <h3>Saved recipe for {this.props.selectedDate} </h3>
      {this.props.RecipeForDate.recipe.map((recipes, key) => (
      < ExistingRecipe 
      key={key}
      selectedDate ={this.props.selectedDate} 
      savedRecipeTitle={recipes.title} 
      savedRecipeCalories={recipes.calories} 
      savedRecipeImage={recipes.image} 
      savedRecipeIngredients={recipes.ingredients}
      />
      ))
      }
      <h3 className='more_search'>Search for another recipe to cook on {this.props.selectedDate}</h3>
      <RecipeSearchBox 
      selectedDate ={this.props.selectedDate} 
      changeExistingRecipeState={this.changeExistingRecipeState}
      />
      
    </div>
    ) : (
      <div>
      <h1>Search for a recipe</h1>
      <RecipeSearchBox 
      selectedDate ={this.props.selectedDate} 
      changeExistingRecipeState={this.changeExistingRecipeState}/>
      </div>
    )
    return(
      <div>
        {this.renderRedirectToHome()}
        {contents}
      </div>
    ) 
  }
}

export default Date;