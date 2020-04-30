import React, {Component} from 'react'
import RecipeSearchBox from '../components/recipeSearchBox'
import axios from 'axios'
import ExistingRecipe from '../components/existingRecipe'
import { Redirect } from 'react-router-dom'

class Date extends Component {
    constructor(props){
      super(props)
      this.props.searchAllRecipeForDate()
      // this.searchDateOnDB()
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
      await this.props.searchAllRecipeForDate()
      this.setState({existingRecipe: true})
    }

    // searchDateOnDB = async () => {
    //   await axios.get('/api/' + this.props.selectedDate,)
    //   .then (res => {
    //     if (res.data){
    //       console.log('searchDateOnDB start')
    //       this.setState({existingRecipe: true})
    //       this.setState({recipe: res.data.recipe})
    //       console.log('recipe state on date',this.state.recipe)

    //       // res.data.recipe.map((list) => {
    //       // this.setState({recipe_one: {
    //       //   savedRecipeTitle: list.title,
    //       //   savedRecipeIngredients: list.ingredients,
    //       //   savedRecipeCalories: list.calories,
    //       //   savedRecipeImage: list.image
    //       //   }
    //       // })
    //       // })
    //     }
    //     // if (res.data && res.data.recipe[0]){
    //     //   this.setState({recipe_two: {
    //     //     savedRecipeTitle: res.data.recipe_two.title,
    //     //     savedRecipeIngredients: res.data.recipe_two.ingredients,
    //     //     savedRecipeCalories: res.data.recipe_two.calories,
    //     //     savedRecipeImage: res.data.recipe_two.image
    //     //     }
    //     //   })  
    //     // }
    //   })
    // }

    renderRedirectToHome = (load) => {
      if (this.props.selectedDate === '2020-04-16') {
        return <Redirect to={'/'}  />
      } else {
        
      }
    }

    
  render() {
    // {console.log('alldate props', this.props.RecipeForDate)}
    const contents = this.props.RecipeForDate ? (
    <div> 
      <h3>Saved recipe for {this.props.selectedDate} </h3>
      <h1>TITLE {this.props.RecipeForDate.recipe[0].title}</h1>
      {this.props.RecipeForDate.recipe.map((recipes) => (
      < ExistingRecipe 
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
      <RecipeSearchBox selectedDate ={this.props.selectedDate} changeExistingRecipeState={this.changeExistingRecipeState}/>
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