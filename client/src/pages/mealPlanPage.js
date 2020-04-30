import React, {Component} from 'react'
import MealPlanRecipe from '../components/mealPlanRecipe'

class MealPlanPage extends Component {
  // constructor(props) {
  //   super(props)
  //   this.searchDB()
  //   this.state ={
  //     AllRecipe: []
  //   }

  // }
  // searchDB = async () => {
  //   await axios.get('/api/')
  //   .then (res => {
  //     console.log('this is working')
  //     this.setState({
  //       AllRecipe: res.data
  //     })
  //     console.log('state', this.state.AllRecipe)
  //     console.log('res', res.data)

  //   })
  // }

  render() {
    return (
      <div className='MealPlanPage'> 
      {console.log(this.props.AllRecipe)}
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
        {/* {this.state.AllRecipe}  */}
        </div>
    )

  }
}

export default MealPlanPage