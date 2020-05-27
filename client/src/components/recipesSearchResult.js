import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import axios from 'axios'


class RecipeSearchResult extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipeData: {
        date: this.props.selectedDate,
        recipe: [
          {title: this.props.title,
          calories: this.props.calories,
          ingredients: this.props.ingredients,
          image: this.props.image,
          healthLabel: this.props.healthLabels,
          url: this.props.url
          }]
      }
    }
  }

  refreshPage = async () => {
    await this.props.searchDB()
    this.props.resetState()
    this.props.searchAllRecipeForDate() 
  }

  addToAdditionalDB = async(recipeData) => {
    await axios.put('/api/', recipeData)
    .then( () => this.refreshPage())
  }

  addToDB = async(recipeData) => {
   await axios.post('/api/', recipeData)
   .then( () => this.refreshPage())
  }

  saveRecipe = () => {
  if (this.props.selectedDate)
    { 
     confirmAlert({
      title: `Save this ${this.props.title} recipe to this ${this.props.selectedDate}`,
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            await axios.get('/api/' + this.props.selectedDate)
            .then(res =>{
              if (res.data){
              this.addToAdditionalDB(this.state.recipeData)
            } else {
            this.addToDB(this.state.recipeData)
            }
            })
        }},
        {label: 'No',}
      ]
      });
      }
    }

  

  render() {
  return(
  <div className='recipe-search-result-component' > 
    <div className='recipe-search-result-container' data-test='recipe-Result-container' onClick={() => {this.saveRecipe()}}>
      <div className='recipe-search-result-title'>
      <h1> {this.props.title} </h1>
      </div>
    <img className='recipe-search-result-image' data-test='recipe-Result-image' src={this.props.image} alt="" /> 
    <h2 className='recipe-search-result-ingredients'> Ingredients : {this.props.ingredients.map((ingredient, key) => 
    <div key={key}> {ingredient.text} </div>
    )} </h2>
  </div>
  </div>
  )
}
}

export default RecipeSearchResult;