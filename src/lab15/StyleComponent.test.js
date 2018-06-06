import 'jest-styled-components'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, {shallow, mount, render} from 'enzyme';
import React from 'react'

import StyleComponent from './StyleComponent'

Enzyme.configure({ adapter: new Adapter() })

describe ('Test Text styled-components ', () => {
  it('Should have color black when primary prop exists ', () => {
    const wrapper = shallow (<Text primary />)
    expect (wrapper). toHaveStyleRule ('color', '#000000 ')
    })
  })
describe ('Test Text styled-components ', () => {
  it('Should have color white when primary prop not exists ', () =>
  {
  const wrapper = shallow (<Text />)
  expect (wrapper). toHaveStyleRule ('color', '#FFFFFF' )
  })
})