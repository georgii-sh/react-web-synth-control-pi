// @flow

import React from 'react'
import { shallow } from 'enzyme'

import { UnwrappedInstruments as Instruments } from './Instruments'

const mockedData = {
  loadInstruments: jest.fn(),
  isLoading: false,
  items: []
}

describe('Instruments Component', () => {
  const component = shallow(<Instruments {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
