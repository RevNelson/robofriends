import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
    error: ''
  }
  wrapper = shallow(<MainPage { ...mockProps} />)
})

it('is expected to render the MainPage component', () => {
  expect(wrapper).toMatchSnapshot();
})

it('does not return filtered robots when nothing is search', () => {
  expect(wrapper.instance().filterRobots()).toEqual([])
})

it('filters robots correctly with a match', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false,
    error: ''
  }

  const wrapper2 = shallow(<MainPage { ...mockProps2} />)
  expect(wrapper2.instance().filterRobots()).toEqual([{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }])
})

it('filters robots correctly without a match', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false,
    error: ''
  }

  const filteredRobots = []
  const wrapper2 = shallow(<MainPage { ...mockProps3} />)
  expect(wrapper.instance().filterRobots()).toEqual([])
  expect(wrapper2.instance().filterRobots()).toEqual(filteredRobots)
})

it('is Pending', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: true,
    error: ''
  }
  const wrapper = shallow(<MainPage { ...mockProps} />)

  expect(wrapper).toMatchSnapshot();
})