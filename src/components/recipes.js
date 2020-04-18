import React from 'react'


const Recipe = ({title, calories, image, ingredients}) => {

  return(
  <div className='recipe-component'> 
    <div className='recipe-container'>
      <div className='title-container'>
      <h1> {title} </h1>
      </div>
        <div className='calories-container'>
        <h2 className='calories'> {calories}</h2>
    </div>
    <h2 className='ingredients'> {ingredients} </h2>
    <img className='image' src={image} alt="" /> 
  </div>
  </div>
  )
}

export default Recipe;