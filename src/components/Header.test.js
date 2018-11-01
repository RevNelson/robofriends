import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

const header = shallow(<Header />)

it('is expected to render the Header component', () => {
  expect(header).toMatchSnapshot();
});

it('is expected to not update', () => {
  const mockProps = {}
  const mockState = 'state'
  expect(header.instance().shouldComponentUpdate(mockProps, mockState)).toMatchSnapshot();
});