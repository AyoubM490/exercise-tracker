import React from 'react';
import { shallow } from 'enzyme';
import findByTestAttr, { checkProps } from '../Utils';
import Navbar from './navbar.component';

const setUp = (props = {}) => {
  const component = shallow(<Navbar {...props} />);
  return component;
};

test('renders without error', () => {
  const wrapper = setUp();
  const component = findByTestAttr(wrapper, 'component-navbar');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  const expectedProps = {
    logout: jest.fn(),
  };
  checkProps(Navbar, expectedProps);
});

test('renders a title', () => {
  const wrapper = setUp();
  const title = findByTestAttr(wrapper, 'title');
  expect(title.length).toBe(1);
});

test('renders an exercise link', () => {
  const wrapper = setUp();
  const exerciseLink = findByTestAttr(wrapper, 'exercise-link');
  expect(exerciseLink.length).toBe(1);
});

test('renders a create exercise link', () => {
  const wrapper = setUp();
  const createExerciseLink = findByTestAttr(wrapper, 'create-exercise-link');
  expect(createExerciseLink.length).toBe(1);
});

test('renders a create user link', () => {
  const wrapper = setUp();
  const createUserLink = findByTestAttr(wrapper, 'create-user-link');
  expect(createUserLink.length).toBe(1);
});
