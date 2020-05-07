import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import axios from 'axios'


class RecipeSearchResult extends Component {

  saveRecipe = () => {
    const recipeData = {
      "date": this.props.selectedDate,
      "recipe": [
        {"title": this.props.title,
        "calories": this.props.calories,
        "ingredients": this.props.ingredients,
        "image": this.props.image,
        'healthLabel': this.props.healthLabels,
        'url': this.props.url
        }]
    }

    const addToAdditionalDB = async() => {
      await axios.put('/api/', recipeData)
      .then( async () => {
        await this.props.searchDB()
        this.props.resetState()
        this.props.searchAllRecipeForDate() 
      })
    }

    const addToDB = async() => {
     await axios.post('/api/', recipeData)
     .then( async () => {
      await this.props.searchDB()   
      this.props.searchAllRecipeForDate()     
     })
    }

    confirmAlert({
      title: `Save this ${this.props.title} recipe to this ${this.props.selectedDate}`,
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            await axios.get('/api/' + this.props.selectedDate)
            .then(res =>{
              if (res.data){
              addToAdditionalDB()
            } else {
            addToDB()
            }
            })
        }},
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }

  

  render() {
  return(
  <div className='recipe-search-result-component'> 
    <div className='recipe-search-result-container' onClick={() => {this.saveRecipe()}}>
      <div className='recipe-search-result-title'>
      <h1> {this.props.title} </h1>
      </div>
        <div className='recipe-search-result-calories-container'>
    </div>
    <img className='recipe-search-result-image' src={this.props.image} alt="" onClick={() => {this.saveRecipe()}} /> 
    <h2 className='recipe-search-result-ingredients'> Ingredients : {this.props.ingredients.map((ingredient, key) => 
    <div key={key}> {ingredient.text} </div>
    )} </h2>
  </div>
  </div>
  )
}
}

export default RecipeSearchResult;