import React, {Component} from 'react'

class MealPlanRecipe extends Component{

  dateFormatter = (dateObject) => {
    const dateFormatted = dateObject.getDate() + "-0" + (dateObject.getMonth() + 1) + "-" + dateObject.getFullYear()
    return dateFormatted
  }

  render() {
    return (
      <div className='Meal-Plan-Recipe-Container' data-test='Meal-Plan-Container'> 
        <h3 className='Meal-Plan-Recipe-Date' data-test='Meal-Plan-date'> {this.dateFormatter(this.props.date)}</h3> 
        <img className='Meal-Plan-Recipe-Image' data-test='Meal-Plan-image' src={this.props.image} alt="" /> 
        <div className='mealPlanRecipeMiddle'>
        <h3 className='Meal-Plan-Recipe-Title' data-test='Meal-Plan-title'>{this.props.title}</h3>
        <h3 className='Meal-Plan-Recipe-Ingredient' data-test='Meal-Plan-ingredient'> {this.props.ingredients.map((ingredients, key) => (
          <div key={key}>{ingredients.text}</div>
        )
        )}</h3>
        </div>
        <form className='Meal-Plan-Recipe-Url' action={this.props.url } target="_blank">
          <input type="submit" value="Go to Recipe" />
        </form>
      </div>
    )
  }
}

export default MealPlanRecipe