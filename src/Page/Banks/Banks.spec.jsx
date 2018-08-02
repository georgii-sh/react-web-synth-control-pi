// @flow

import React from 'react'
import { shallow } from 'enzyme'

import { UnwrappedBanks as Banks } from './Banks'

const mockedData = {
  loadBanks: jest.fn(),
  isLoading: false,
  items: []
}

describe('Banks Component', () => {
  const component = shallow(<Banks {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
