import React from 'react'
import Calender from '../components/calender'

function HomePage(props) {
    return(
      <div> 
      <h1> Meal Mapper</h1>
      <h2> Select a date to plan your next meal</h2>
        <Calender 
        // datePicked={this.props.datePicked}
        /> 
      </div>
    ) 
}

export default HomePage;