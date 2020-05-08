import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './homePage';

describe('HomePage', () => {
  it('should render calender Component', () => {
    const wrapper = shallow(<HomePage/>)

    expect(wrapper.find("[data-test='calender-component']").length).toBe(1)

  })

})