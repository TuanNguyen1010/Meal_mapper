import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import axios from 'axios'


class RecipeSearchResult extends Component {

  // saveToDB = async (recipeData) => {
  //   await  axios.post('/api/', recipeData)
  //   this.props.changeExistingRecipeState()
  //   console.log('clicked Yes')
  // }

  saveRecipe = (recipeNumber) => {
    const recipeDataOne = {
      "date": this.props.selectedDate,
      "recipe_one": 
        {"title": this.props.title,
        "calories": this.props.calories,
        "ingredients": this.props.ingredients,
        "image": this.props.image}
    }
    const recipeDataTwo = {
      "date": this.props.selectedDate,
      "recipe_two": 
        {"title": this.props.title,
        "calories": this.props.calories,
        "ingredients": this.props.ingredients,
        "image": this.props.image}
    }

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
              axios.put('/api/', recipeDataTwo)
            } else {
            axios.post('/api/', recipeDataOne)
            this.props.changeExistingRecipeState()
            console.log('clicked Yes', res)
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
  <div className='recipe-component'> 
    <div className='recipe-container'>
      <div className='title-container' onClick={() => {this.saveRecipe()}}>
      <h1> {this.props.title} </h1>
      </div>
        <div className='calories-container'>
        <h2 className='calories'> Calories: {this.props.calories}</h2>
    </div>
    <h2 className='ingredients' onClick={() => console.log(typeof [])} > Ingredients : {this.props.ingredients} </h2>
    <img className='image' src={this.props.image} alt="" onClick={() => {this.saveRecipe()}} /> 
  </div>
  </div>
  )
}
}

export default RecipeSearchResult;