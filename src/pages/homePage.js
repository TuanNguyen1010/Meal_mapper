import React, { Component } from 'react'
import Calender from '../components/calender'
import { render } from 'enzyme'

class HomePage extends Component {
  constructor(props){
    super(props)
    this.state ={
    }
  }
  render() {
    return(
      <div> 
      <h1> Meal Mapper</h1>
      <h2> Select a date to plan your next meal</h2>
        <Calender 
        datePicked={this.props.datePicked}
        /> 
      </div>
    ) 
  }
}

export default HomePage;