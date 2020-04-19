import React from 'react'


const Recipe = ({title, calories, image, ingredients}) => {

  const saveRecipe = () => {
    // link to express function 
    console.log('testing ')
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