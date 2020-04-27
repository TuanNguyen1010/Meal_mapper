import React, {Component} from 'react'

class MealPlanRecipe extends Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className='mealPlanRecipeComponent'> 
        <h3 className='mealPlanRecipeDate'>{this.props.date}</h3> 
        <h3 className='mealPlanRecipeTitle'>title: {this.props.title}</h3>
        <img className='mealPlanRecipeImage' src={this.props.image} alt="" /> 
        <h3 className='mealPlanRecipeIngredient'> ingredients: {this.props.ingredients.map((ingredients) => (
          <div>{ingredients}</div>
         )
        )}</h3>
      </div>
    )
  }
}

export default MealPlanRecipe