import React, { Component } from 'react'
import Calender from '../components/calender'

class HomePage extends Component {

  render() {
    return(
      <div> 
      <h1> Meal Mapper</h1>
      <h2> Select a date to plan your next meal</h2>
        <Calender 
        datePicked={this.props.datePicked}
        resetRecipeState={this.props.resetRecipeState}
        /> 
      </div>
    ) 
  }
}

export default HomePage;