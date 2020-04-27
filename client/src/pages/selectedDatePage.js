import React, {Component} from 'react'
import RecipeSearcher from '../components/recipeSearcher'
import axios from 'axios'
import ExistingRecipe from '../components/existingRecipe'

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
        recipe_onesSavedRecipeTitle: '',
        recipe_oneSavedRecipeIngredients: [],
        recipe_oneSavedRecipeCalories: 0,
        recipe_oneSavedRecipeImage: '',
        recipe_twosSavedRecipeTitle: '',
        recipe_twoSavedRecipeIngredients: [],
        recipe_twoSavedRecipeCalories: 0,
        recipe_twoSavedRecipeImage: ''
      }
    }

    changeExistingRecipeState = async () => {
      await this.searchDB()
      this.setState({existingRecipe: true})
    }

    searchDB = async () => {
      await axios.get('/api/' + this.props.selectedDate,)
      .then (res => {
        if (res.data){
          // console.log("res ingredents",res.data.recipe_one.image)
        this.setState({existingRecipe: true})
        this.setState({recipe_oneSavedRecipeTitle: res.data.recipe_one.title})
        this.setState({recipe_oneSavedRecipeIngredients: res.data.recipe_one.ingredients})
        this.setState({recipe_oneSavedRecipeCalories: res.data.recipe_one.calories})
        this.setState({recipe_oneSavedRecipeImage: res.data.recipe_one.image})
        if (res.data.recipe_two){
          this.setState({recipe_twoSavedRecipeTitle: res.data.recipe_two.title})
          this.setState({recipe_twoSavedRecipeIngredients: res.data.recipe_two.ingredients})
          this.setState({recipe_twoSavedRecipeCalories: res.data.recipe_two.calories})
          this.setState({recipe_twoSavedRecipeImage: res.data.recipe_two.image})}
        }
      })
    }

  render() {
    const contents = this.state.existingRecipe ? (
    <div> 
      <h3>Saved recipe for {this.props.selectedDate} </h3>
      < ExistingRecipe selectedDate ={this.props.selectedDate} savedRecipeTitle={this.state.recipe_oneSavedRecipeTitle} savedRecipeCalories={this.state.recipe_oneSavedRecipeCalories} savedRecipeImage={this.state.recipe_oneSavedRecipeImage} savedRecipeIngredients={this.state.recipe_oneSavedRecipeIngredients}/>
      < ExistingRecipe selectedDate ={this.props.selectedDate} savedRecipeTitle={this.state.recipe_twoSavedRecipeTitle} savedRecipeCalories={this.state.recipe_twoSavedRecipeCalories} savedRecipeImage={this.state.recipe_twoSavedRecipeImage} savedRecipeIngredients={this.state.recipe_twoSavedRecipeIngredients}/>  
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