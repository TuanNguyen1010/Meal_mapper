import React, { Component } from 'react'
import Calender from '../components/calender'
import RecipeSearchBox from '../components/recipeSearchBox'

class HomePage extends Component {

  render() {
    return(
      <div data-test='calender-component' > 
      <div>
        <h2> Select a date to save your next meal</h2>
        <Calender 
        datePicked={this.props.datePicked}
        resetRecipeState={this.props.resetRecipeState}
        /> 
      </div>
      <h2> Search for a recipe</h2>
      <RecipeSearchBox 
      changeExistingRecipeState={this.changeExistingRecipeState}
      searchAllRecipeForDate={this.props.searchAllRecipeForDate} 
      searchDB={this.props.searchDB}
      resetState={this.props.resetState}
      />
      </div>
    ) 
  }
}

export default HomePage;