import React, {Component} from 'react'

class ExistingRecipe extends Component {
  constructor(props){
    super(props)
  }

  logging = (hello) => {
    console.log(hello)
  }
  render() {


    return (
      <div>
      <h1>{this.props.savedRecipeTitle } </h1>
      <h3> Calories: {this.props.savedRecipeCalories}</h3>
      <img src={this.props.savedRecipeImage} alt=""/> 
      <h3> {this.props.savedRecipeIngredients.map((ingredients)=> (
        <div> {ingredients.text}</div>
      ))}</h3>
      </div>
    )
  }
}

export default ExistingRecipe