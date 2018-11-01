import { shallow } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

it('is expected to render the Scroll component', () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});