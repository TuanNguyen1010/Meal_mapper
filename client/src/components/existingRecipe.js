import React, {Component} from 'react'
import { Route } from 'react-router-dom'

class ExistingRecipe extends Component {

  render() {

    return (
      <div className='Existing-Recipe-Container' data-test='Existing-Recipe-container'>
        <img className='Existing-Recipe-Image' data-test='Existing-Recipe-image' src={this.props.savedRecipeImage} alt=""/> 
        <div className='Existing-Recipe-Title+Ingredients'>
          <h1 className='Existing-Recipe-Title' data-test='Existing-Recipe-title'>{this.props.savedRecipeTitle }</h1>
          <h3 className='Existing-Recipe-Ingredients' data-test='Existing-Recipe-ingredients'> {this.props.savedRecipeIngredients.map((ingredients, key)=> (
            <div key={key}> {ingredients.text}</div>
          ))}</h3>
      </div>
    </div>
      
    )
  }
}

export default ExistingRecipe