import React, {Component} from 'react'
import axios from 'axios'
import MealPlanRecipe from '../components/mealPlanRecipe'

class MealPlanPage extends Component {
  constructor(props) {
    super(props)
    this.searchDB()
    this.state ={
      AllRecipe: []
    }

  }
  searchDB = async () => {
    await axios.get('/api/')
    .then (res => {
      console.log('this is working')
      this.setState({
        AllRecipe: res.data
      })
      console.log('state', this.state.AllRecipe)
      console.log('res', res.data)

    })
  }

  render() {
    return (
      <div className='MealPlanPage'> 
        <h1> Saved Meal Plans </h1>
        {this.state.AllRecipe.map((recipe, key) => (
        <MealPlanRecipe
        key={key}
        date={recipe.date}
        title={recipe.recipe_one.title}
        image={recipe.recipe_one.image}
        ingredients={recipe.recipe_one.ingredients}
        /> 
        ))
        }
        {/* {this.state.AllRecipe}  */}
        </div>
    )

  }
}

export default MealPlanPage