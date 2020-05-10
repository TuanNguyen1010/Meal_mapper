import React from 'react';
import { shallow } from 'enzyme';
import Nav from './nav'


describe(' Nav', () => {
  it('renders Nav Bar', () => {
    const wrapper = shallow(<Nav/>)
    expect(wrapper.find("[data-test='Nav-Bar']").length).toEqual(1)
  })
})