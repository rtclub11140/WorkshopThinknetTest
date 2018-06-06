import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, mount, render} from 'enzyme';
import React from 'react'

import Button from './snapshot'

Enzyme.configure({adapter: new Adapter()});

it('converts basic button using shallow', () => {
  const shallowed = shallow(
    <Button className="class">
      <strong>Hello!</strong>
    </Button>,
  );

  expect(shallowed).toMatchSnapshot();
});

it('converts basic button using mount', () => {
  const mounted = mount(
    <Button className="class">
      <strong>Hello!</strong>
    </Button>,
  );

  expect(mounted).toMatchSnapshot();
});

it('converts basic button using render', () => {
  const rendered = render(
    <Button className="class">
      <strong>Hello!</strong>
    </Button>,
  );

  expect(rendered).toMatchSnapshot();
});