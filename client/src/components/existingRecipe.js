import React, {Component} from 'react'

class ExistingRecipe extends Component {
  render() {

    return (
      <div className='Existing-Recipe-Container'>
      <img className='Existing-Recipe-Image' src={this.props.savedRecipeImage} alt=""/> 
      <div className='Existing-Recipe-Title+Ingredients'>
      <h1 className='Existing-Recipe-Title'>{this.props.savedRecipeTitle } </h1>
      {/* <h3 className='Existing-Recipe-Calories'> Calories: {this.props.savedRecipeCalories}</h3> */}
      <h3 className='Existing-Recipe-Ingredients' > {this.props.savedRecipeIngredients.map((ingredients, key)=> (
        <div key={key}> {ingredients.text}</div>
      ))}</h3>
      </div>

          <button className='Existing-Recipe-button'>
      see instructuctions
      </button>
      </div>
      
    )
  }
}

export default ExistingRecipe