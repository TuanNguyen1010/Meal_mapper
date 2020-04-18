import React, {Component} from 'react'

class Recipes extends Component {
  constructor(props){
    super(props)
    this.state ={
      selectedDate: '2020-04-16',
    }
    this.datePicked = this.datePicked.bind(this) 
  }
  datePicked = async (date) => {
    await this.setState( {selectedDate: date})
    console.log(this.state.selectedDate)
  }
  render() {
    return(
    <div> 
    <h1>Search for a recipe</h1>
    </div>
    ) 
  }
}

export default Recipes;