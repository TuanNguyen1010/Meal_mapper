import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Calender from './calender'

describe("calender component", () => {
  it('renders the calender', () => {
    const wrapper = shallow(<Calender/>)
    const calenderComponent = wrapper.find(`[data-test='calenderComponent']`)
    expect(calenderComponent.length).toBe(1)
  })
})