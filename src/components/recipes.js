import React from 'react'
import { confirmAlert } from 'react-confirm-alert'


const Recipe = ({title, calories, image, ingredients}) => {

  const saveRecipe = () => {
    // link to express function 
    // console.log('testing ')
    confirmAlert({
      title: 'Save this recipe to this date',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }

  return(
  <div className='recipe-component'> 
    <div className='recipe-container'>
      <div className='title-container' onClick={() => {saveRecipe()}}>
      <h1> {title} </h1>
      </div>
        <div className='calories-container'>
        <h2 className='calories'> Calories: {calories}</h2>
    </div>
    <h2 className='ingredients'> Ingredients : {ingredients} </h2>
    <img className='image' src={image} alt="" onClick={() => {saveRecipe()}} /> 
  </div>
  </div>
  )
}

export default Recipe;