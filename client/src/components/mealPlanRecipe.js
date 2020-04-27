import React, {Component} from 'react'

class MealPlanRecipe extends Component{

  render() {
    return (
      <div className='mealPlanRecipeComponent'> 
        <div className='mealPlanRecipeContainer'>
          <h3 className='mealPlanRecipeDate'> {this.props.date}</h3> 
          <div className='mealPlanRecipeMiddle'>
          <h3 className='mealPlanRecipeTitle'>title: {this.props.title}</h3>
          <img className='mealPlanRecipeImage' src={this.props.image} alt="" /> 
          </div>
          <h3 className='mealPlanRecipeIngredient'> ingredients: {this.props.ingredients.map((ingredients) => (
            <div>{ingredients.text}</div>
          )
          )}</h3>
        </div>
      </div>
    )
  }
}

export default MealPlanRecipe