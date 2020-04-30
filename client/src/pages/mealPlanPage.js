import React, {Component} from 'react'
import MealPlanRecipe from '../components/mealPlanRecipe'

class MealPlanPage extends Component {

  render() {
    return (
      <div className='MealPlanPage'> 
        <h1> Saved Meal Plans </h1>
        {this.props.AllRecipe.map((recipe, key) => (
        <MealPlanRecipe
        key={key}
        date={recipe.date}
        title={recipe.recipe[0].title}
        image={recipe.recipe[0].image}
        ingredients={recipe.recipe[0].ingredients}
        /> 
        ))
        }
        </div>
    )

  }
}

export default MealPlanPage