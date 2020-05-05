import React, {Component} from 'react'
import MealPlanRecipe from '../components/mealPlanRecipe'

class MealPlanPage extends Component {

  render() {
    const AllRecipesList = []
    this.props.AllRecipe.map((recipesWithDates) => {
      return recipesWithDates.recipe.map((individualRecipes) => {
        return AllRecipesList.push({date: recipesWithDates.date, recipe: individualRecipes})
      })
    })

    return (
      <div className='Meal-Plan-Page-container'> 
        <h1> Saved Meal Plans </h1>
        {AllRecipesList.map((recipe, key) => (
        <MealPlanRecipe
        key={key}
        date={recipe.date}
        title={recipe.recipe.title}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        /> 
        ))
        }
        </div>
    )

  }
}

export default MealPlanPage