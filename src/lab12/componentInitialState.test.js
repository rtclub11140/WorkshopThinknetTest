import React from 'react';
import ComponentInitialState from "./componentInitialState";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, mount, render} from 'enzyme';

describe('Test initial state', () => {
  it('Should have state posts is empty array', () => {
    const wrapper = shallow(<ComponentInitialState />, { disableLifecycleMethods: true });
    expect(wrapper.state()).toHaveProperty('members', []);
  });
});