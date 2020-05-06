import React, {Component} from 'react'
import MealPlanRecipe from '../components/mealPlanRecipe'

class MealPlanPage extends Component {


  dateStringToDateObject = (date) => {
    return this.props.dateObjectFormatter(
      parseInt(date.slice(6,10)), 
      parseInt(date.slice(3,5)) - 1, 
      parseInt(date.slice(0,2)))
  }


  render() {
    const AllRecipesList = []
    this.props.AllRecipe.map((recipesWithDates) => {
      return recipesWithDates.recipe.map((individualRecipes) => {
        return AllRecipesList.push({date: this.dateStringToDateObject(recipesWithDates.date), recipe: individualRecipes})
      })
    })

    const RecipesSavedAfterToday = []
    AllRecipesList.map((recipesItems) => {
      if (recipesItems.date > new Date()) {
        RecipesSavedAfterToday.push(recipesItems)
      }
    })

    const sortedRecipe = RecipesSavedAfterToday.sort((a, b) => b.date - a.date).reverse()

    return (
      <div className='Meal-Plan-Page-Component'> 
        <h1> Saved Meal Plans </h1>
        {sortedRecipe.map((recipe, key) => (
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