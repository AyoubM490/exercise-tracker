import React from 'react';
import { shallow } from 'enzyme';
import findByTestAttr, { checkProps } from '../Utils';
import Exercise from './exercise.component';

const setUp = (props = {}) => {
  const component = shallow(<Exercise {...props} />);
  return component;
};

test('renders without error', () => {
  const wrapper = setUp();
  const component = findByTestAttr(wrapper, 'component-exercise');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  const expectedProps = {
    exercise: {
      username: 'test user',
      description: 'test description',
      duration: 0,
      date: '2020-10-29T00:00:00.000Z',
    },
    deleteExercise: jest.fn(),
  };
  checkProps(Exercise, expectedProps);
});

test('renders a username', () => {
  const wrapper = setUp();
  const username = findByTestAttr(wrapper, 'username');
  expect(username.length).toBe(1);
});

test('renders a description', () => {
  const wrapper = setUp();
  const description = findByTestAttr(wrapper, 'description');
  expect(description.length).toBe(1);
});

test('renders a duration', () => {
  const wrapper = setUp();
  const duration = findByTestAttr(wrapper, 'duration');
  expect(duration.length).toBe(1);
});

test('renders a date', () => {
  const wrapper = setUp();
  const date = findByTestAttr(wrapper, 'date');
  expect(date.length).toBe(1);
});

test('renders a delete button', () => {
  const wrapper = setUp();
  const deleteButton = findByTestAttr(wrapper, 'delete-button');
  expect(deleteButton.length).toBe(1);
});
