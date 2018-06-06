import Enzyme, {shallow, mount, render} from 'enzyme';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';

import Content from './content'

Enzyme.configure({adapter: new Adapter()});

it('Should contain one #title ', () => {
    const wrapper = shallow(<Content />)
    expect(wrapper. find('#title')).toHaveLength (1)
})
