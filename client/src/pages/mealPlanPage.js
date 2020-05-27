import React, {Component} from 'react'
import MealPlanRecipe from '../components/mealPlanRecipe'
import changeDateStringtoDateObject from '../components/changeDateStringtoDateObject'

class MealPlanPage extends Component {

  render() {
    const AllRecipesList = []
    this.props.AllRecipe.map((recipesWithDates) => {
      return recipesWithDates.recipe.map((individualRecipes) => {
        return AllRecipesList.push({date: changeDateStringtoDateObject(recipesWithDates.date), recipe: individualRecipes})
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
      <div className='Meal-Plan-Page-Component' data-test='Meal-Plan-Page-Component'> 
        <h1> Saved Meal Plans </h1>
        {/* {this.props.setValidRecipes(sortedRecipe)} */}
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