import React, {Component} from 'react'
import RecipeSearcher from '../components/recipeSearcher'
import axios from 'axios'

class Date extends Component {
    constructor(props){
      super(props)
      this.state = {
        searchData: null,
        query: "chicken",
        recipes: null,
        avail: false
      }
    }

  searchDB = async (e) => {
    await axios.get('http://localhost:8000/recipe/findByDate/' + this.props.selectedDate,)
    .then (res =>  console.log(res.data))
  } 

  render() {
    return(
      <div> 
        <RecipeSearcher selectedDate ={this.props.selectedDate}/>
      </div>
    ) 
  }
}

export default Date;