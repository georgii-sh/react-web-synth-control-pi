// @flow

import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

const mockedData = {

}

describe('Header', () => {
  const component = shallow(<Header {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
