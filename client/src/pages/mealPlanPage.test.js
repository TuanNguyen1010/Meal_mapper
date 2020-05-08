import React from 'react';
import { shallow } from 'enzyme';
import MealPlanPage from './mealPlanPage';

describe('HomePage', () => {
  it('should render calender Component', () => {
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


    const wrapper = shallow(<MealPlanPage AllRecipe={AllRecipeMock} dateObjectFormatter={jest.fn()}/>)
    expect(wrapper.find("[data-test='Meal-Plan-Page-Component']").length).toBe(1)
  })
})