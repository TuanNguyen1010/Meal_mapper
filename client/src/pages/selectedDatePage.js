import React, {Component} from 'react'
import RecipeSearcher from '../components/recipeSearcher'
import axios from 'axios'
import ExistingRecipe from '../components/existingRecipe'
import { Redirect } from 'react-router-dom'

class Date extends Component {
    constructor(props){
      super(props)
      this.searchDateOnDB()
      this.state = {
        searchData: null,
        query: "chicken",
        recipes: null,
        avail: false,
        existingRecipe: false,
        recipe_one: {
          savedRecipeTitle: '',
          savedRecipeIngredients: [],
          savedRecipeCalories: 0,
          savedRecipeImage: ''
        },
        recipe_two: {
          savedRecipeTitle: '',
          savedRecipeIngredients: [],
          savedRecipeCalories: 0,
          savedRecipeImage: ''
      }
    }}

    changeExistingRecipeState = async () => {
      await this.searchDateOnDB()
      this.setState({existingRecipe: true})
    }

    searchDateOnDB = async () => {
      await axios.get('/api/' + this.props.selectedDate,)
      .then (res => {
        if (res.data){
          this.setState({existingRecipe: true})
          this.setState({recipe_one: {
            savedRecipeTitle: res.data.recipe_one.title,
            savedRecipeIngredients: res.data.recipe_one.ingredients,
            savedRecipeCalories: res.data.recipe_one.calories,
            savedRecipeImage: res.data.recipe_one.image
            }
          })
        }
        if (res.data && res.data.recipe_two){
          this.setState({recipe_two: {
            savedRecipeTitle: res.data.recipe_two.title,
            savedRecipeIngredients: res.data.recipe_two.ingredients,
            savedRecipeCalories: res.data.recipe_two.calories,
            savedRecipeImage: res.data.recipe_two.image
            }
          })  
        }
      })
    }

    renderRedirectToHome = (load) => {
      if (this.props.selectedDate === '2020-04-16') {
        return <Redirect to={'/'}  />
      } else {
        
      }
    }

  render() {
    const contents = this.state.existingRecipe ? (
    <div> 
      <h3>Saved recipe for {this.props.selectedDate} </h3>
      < ExistingRecipe selectedDate ={this.props.selectedDate} savedRecipeTitle={this.state.recipe_one.savedRecipeTitle} savedRecipeCalories={this.state.recipe_one.savedRecipeCalories} savedRecipeImage={this.state.recipe_one.savedRecipeImage} savedRecipeIngredients={this.state.recipe_one.savedRecipeIngredients}/>
      < ExistingRecipe selectedDate ={this.props.selectedDate} savedRecipeTitle={this.state.recipe_two.savedRecipeTitle} savedRecipeCalories={this.state.recipe_two.savedRecipeCalories} savedRecipeImage={this.state.recipe_two.savedRecipeImage} savedRecipeIngredients={this.state.recipe_two.savedRecipeIngredients}/>  
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
        {this.renderRedirectToHome()}
        {contents}
      </div>
    ) 
  }
}

export default Date;