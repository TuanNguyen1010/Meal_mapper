import React, {Component} from 'react'

class ShoppingList extends Component{
  
  render(){
    const allIngredients = []
    this.props.AllRecipe.map((wrap) => {
      wrap.recipe.map((i) => {
        i.ingredients.map((ia) =>{
          allIngredients.push(ia)
        })
      })
    })

    return (
    <div> 
      <h1> ShoppingList</h1>
        <div className='ShppingListnPage'> 
        <h3> ingredients </h3>
        {allIngredients.map((ingredients, key) => (
          <div key={key}> {ingredients.text} </div> 
        ))}
        </div>
    </div>
      
    )
  }
}

export default ShoppingList