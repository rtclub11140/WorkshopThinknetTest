import React from 'react';
import Gallery from "./Gallery";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, mount, render} from 'enzyme';

describe('Test componentDidmount', () => {
  it('Should call fetchPosts', () => {
    const wrapper = shallow(<Gallery />, { disableLifecycleMethods: true });
    const instance = wrapper.instance();
    instance.componentDidMount();    
  });
});