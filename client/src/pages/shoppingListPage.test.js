import React from 'react';
import {shallow} from 'enzyme';
import ShoppingListPage from './shoppingListPage'

describe('ShoppingListPage', () => {
  it('renders Shopping List container', () => {
    const AllRecipeMock = []
    const wrapper = shallow(<ShoppingListPage AllRecipe={AllRecipeMock}/>)
    expect(wrapper.find("[data-test='Shopping-List-Component']").length).toBe(1)
  })
})