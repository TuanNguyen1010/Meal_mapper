import React from 'react'


const Recipe = ({title, calories, image, ingredients}) => {

  return(
  <div> 
    <h1> {title} </h1>
    <img src={image} alt="" /> 
    <h2> {calories}</h2>
  <h2> {ingredients} </h2>
    hello

  </div>)
}

export default Recipe;