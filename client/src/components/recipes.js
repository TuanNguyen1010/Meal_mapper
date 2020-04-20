import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'


class Recipe extends Component {

  saveRecipe = (props) => {
    // link to express function 
    confirmAlert({
      title: `Save this ${this.props.title} recipe to this ${this.props.selectedDate}`,
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => console.log('clicked Yes')
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
    <h2 className='ingredients'> Ingredients : {this.props.ingredients} </h2>
    <img className='image' src={this.props.image} alt="" onClick={() => {this.saveRecipe()}} /> 
  </div>
  </div>
  )
}
}

export default Recipe;