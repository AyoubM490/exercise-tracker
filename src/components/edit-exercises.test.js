import React from 'react';
import { shallow } from 'enzyme';
import findByTestAttr, { checkProps } from '../Utils';
import EditExercises from './edit-exercises.component';

const defaultProps = {
  username: '',
  description: '',
  duration: 0,
  date: new Date(),
  users: [],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<EditExercises {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-edit-exercises');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { ...defaultProps };
  checkProps(EditExercises, expectedProps);
});

test('renders a title', () => {
  const wrapper = setup();
  const title = findByTestAttr(wrapper, 'edit-exercises-title');
  expect(title.length).toBe(1);
});

test('renders a username input', () => {
  const wrapper = setup();
  const usernameInput = findByTestAttr(wrapper, 'username-input');
  expect(usernameInput.length).toBe(1);
});

test('renders a description input', () => {
  const wrapper = setup();
  const descriptionInput = findByTestAttr(wrapper, 'description-input');
  expect(descriptionInput.length).toBe(1);
});

test('renders a duration input', () => {
  const wrapper = setup();
  const durationInput = findByTestAttr(wrapper, 'duration-input');
  expect(durationInput.length).toBe(1);
});

test('renders a date input', () => {
  const wrapper = setup();
  const dateInput = findByTestAttr(wrapper, 'date-input');
  expect(dateInput.length).toBe(1);
});

test('renders a date picker input', () => {
  const wrapper = setup();
  const datePickerInput = findByTestAttr(wrapper, 'date-picker-input');
  expect(datePickerInput.length).toBe(1);
});

test('renders a submit button', () => {
  const wrapper = setup();
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  expect(submitButton.length).toBe(1);
});
