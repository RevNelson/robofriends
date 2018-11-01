import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

const mockColor = 'red';
const wrapper = shallow(<CounterButton color={mockColor} />);

it('should not update button', () => {
  const mockProps = { count: wrapper.state().count };
  const shouldUpdate = wrapper.instance().shouldComponentUpdate(mockProps, mockProps)
  expect(shouldUpdate).toBe(false)
})

it('should update button', () => {
  const mockProps = { count: wrapper.state().count + 1 };
  const shouldUpdate = wrapper.instance().shouldComponentUpdate(mockProps, mockProps)
  expect(shouldUpdate).toBe(true)
})

it('expect to render CounterButton component', () => {
  expect(wrapper).toMatchSnapshot();
});

it('correctly increments the counter', () => {

  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ count: 1 })
  expect(wrapper.props().color).toEqual('red')
})