import React, {Component} from 'react'

class MealPlanRecipe extends Component{

  render() {
    return (
      <div className='Meal-Plan-Recipe-Component'> 
        <div className='Meal-Plan-Recipe-Container'>
          <h3 className='Meal-Plan-Recipe-Date'> {this.props.date}</h3> 
          <div className='mealPlanRecipeMiddle'>
          <h3 className='Meal-Plan-Recipe-Title'>{this.props.title}</h3>
          <img className='Meal-Plan-Recipe-Image' src={this.props.image} alt="" /> 
          </div>
          <h3 className='Meal-Plan-Recipe-Ingredient'> {this.props.ingredients.map((ingredients, key) => (
            <div key={key}>{ingredients.text}</div>
          )
          )}</h3>
        </div>
      </div>
    )
  }
}

export default MealPlanRecipe