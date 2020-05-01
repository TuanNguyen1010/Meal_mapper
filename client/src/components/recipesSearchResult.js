import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import axios from 'axios'


class RecipeSearchResult extends Component {

  saveRecipe = (recipeNumber) => {
    const recipeData = {
      "date": this.props.selectedDate,
      "recipe": [
        {"title": this.props.title,
        "calories": this.props.calories,
        "ingredients": this.props.ingredients,
        "image": this.props.image}]
    }
    // const recipeDataTwo = {
    //   "date": this.props.selectedDate,
    //   "recipe_two": 
    //     {"title": this.props.title,
    //     "calories": this.props.calories,
    //     "ingredients": this.props.ingredients,
    //     "image": this.props.image}
    // }

    confirmAlert({
      title: `Save this ${this.props.title} recipe to this ${this.props.selectedDate}`,
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            // this.saveToDB()
            await axios.get('/api/' + this.props.selectedDate)
            .then(res =>{
              if (res.data){
              axios.put('/api/', recipeData)
              this.props.changeExistingRecipeState()
            } else {
            axios.post('/api/', recipeData)
            this.props.changeExistingRecipeState()
            console.log('clicked Yes')
            }
            })
        }},
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }

  

  render() {
  return(
  <div className='recipe-search-result-component'> 
    <div className='recipe-search-result-container' onClick={() => {this.saveRecipe()}}>
      <div className='recipe-search-result-title'>
      <h1> {this.props.title} </h1>
      </div>
        <div className='recipe-search-result-calories-container'>
        <h2 className='recipe-search-result-calories'> Calories: {this.props.calories}</h2>
    </div>
    <h2 className='recipe-search-result-ingredients' onClick={() => console.log(typeof [])} > Ingredients : {this.props.ingredients.map((ingredient, key) => 
    <div key={key}> {ingredient.text} </div>
    )} </h2>
    <img className='recipe-search-result-image' src={this.props.image} alt="" onClick={() => {this.saveRecipe()}} /> 
  </div>
  </div>
  )
}
}

export default RecipeSearchResult;