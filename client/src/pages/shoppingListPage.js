import React, {Component} from 'react'

class ShoppingList extends Component{
  
  render(){
    const allIngredients = []
    this.props.AllRecipe.map((recipesWithDates) => {
      recipesWithDates.recipe.map((individualRecipes) => {
        individualRecipes.ingredients.map((individualIngredients) =>{
          allIngredients.push({individualIngredients})
        })
      })
    })
    return (
    <div> 
      <h1> ShoppingList</h1>
        <div className='ShppingListnPage'> 
        <h3> ingredients </h3>
        {allIngredients.map((ingredients, key) => (
          <div key={key}> {ingredients.individualIngredients.text} </div> 
        ))}
        </div>
    </div>
      
    )
  }
}

export default ShoppingList