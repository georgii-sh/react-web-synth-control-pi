// @flow

import React from 'react'
import { shallow } from 'enzyme'
import Star from './Star'

const mockedData = {

}

describe('Star', () => {
  const component = shallow(<Star {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
