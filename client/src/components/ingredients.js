import React, {Component} from 'react'

class ingredients extends Component{

  render(){
    return(
      <div>
        <h3 className='mealPlanRecipeIngredient'> ingredients: {this.props.ingredients.map((ingredients, key) => (
      <div key={key}>{ingredients.text}</div>
      )
      )}</h3> 
        
      </div>
    )
  }
}