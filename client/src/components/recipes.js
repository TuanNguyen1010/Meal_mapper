import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import axios from 'axios'


class Recipe extends Component {

  saveRecipe = (props) => {
    const recipeData = {
      "date": this.props.selectedDate,
      "title": this.props.title,
      "calories": this.props.calories,
      "ingredients": this.props.ingredients,
      "image": this.props.image
    
    }
    // link to express function 
    confirmAlert({
      title: `Save this ${this.props.title} recipe to this ${this.props.selectedDate}`,
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            await  axios.post('/api/', recipeData)
            this.props.changeExistingRecipeState()
            console.log('clicked Yes')
          }
        },
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

export default Recipe;