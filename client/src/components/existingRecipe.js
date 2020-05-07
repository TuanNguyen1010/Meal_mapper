import React, {Component} from 'react'
import { Route } from 'react-router-dom'

class ExistingRecipe extends Component {

  directToInstructions = () => {
    console.log('fuck')
    return <Route path='/external' component={() => { window.location = 'https://domain.extension/external-without-params';} }/>
  }
  render() {

    return (
      <div className='Existing-Recipe-Container'>
        <img className='Existing-Recipe-Image' src={this.props.savedRecipeImage} alt=""/> 
        <div className='Existing-Recipe-Title+Ingredients'>
          <h1 className='Existing-Recipe-Title'>{this.props.savedRecipeTitle } </h1>
          <h3 className='Existing-Recipe-Ingredients' > {this.props.savedRecipeIngredients.map((ingredients, key)=> (
            <div key={key}> {ingredients.text}</div>
          ))}</h3>
      </div>
      <button onClick={() => window.location.href(this.props.savedRecipeUrl) }>Click me</button>
      {/* <button className='Existing-Recipe-button' onclick={() => {location.href = this.props.url}}>see instructuctions</button> */}
    </div>
      
    )
  }
}

export default ExistingRecipe