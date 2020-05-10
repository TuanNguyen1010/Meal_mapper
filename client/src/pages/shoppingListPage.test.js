import React from 'react';
import {shallow} from 'enzyme';
import ShoppingListPage from './shoppingListPage'

describe('ShoppingListPage', () => {
  it('renders Shopping List container', () => {
    const AllRecipeMock = [{
      date: '15-04-2020', 
      recipe: [{
        title: 'kimchi fried rice',
        ingredients:[{
          text: 'kimchi'
        }, {
          text: 'rice'
        }], 
        image: 'picture of food',
        url: 'website of the recipe' 
      }]}]
    const wrapper = shallow(<ShoppingListPage AllRecipe={AllRecipeMock}/>)
    expect(wrapper.find("[data-test='Shopping-List-Component']").length).toBe(1)
    expect(wrapper.find("[data-test='ingredient']").text()).toContain(AllRecipeMock[0].recipe[0].ingredients[0].text)
  })
})