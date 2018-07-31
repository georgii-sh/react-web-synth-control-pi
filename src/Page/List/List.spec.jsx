// @flow

import React from 'react'
import { shallow } from 'enzyme'

import List from './List'

const mockedData = {
  items: [],
  isLoading: false,
  onItemClick: jest.fn()
}

describe('List Component', () => {
  const component = shallow(<List {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should not display a CometSpinLoader when isLoading props is false', () => {
    expect(component.find('m').length).toEqual(0)
  })

  test('should display a CometSpinLoader when isLoading props is true', () => {
    component.setProps({ isLoading: true })
    expect(component.find('m').length).toEqual(1)
  })
})
