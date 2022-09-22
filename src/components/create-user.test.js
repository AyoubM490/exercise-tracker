import React from 'react';
import { shallow } from 'enzyme';
import findByTestAttr, { checkProps } from '../Utils';
import CreateUser from './create-user.component';

const defaultProps = {
  username: '',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CreateUser {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-create-user');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { ...defaultProps };
  checkProps(CreateUser, expectedProps);
});

test('renders a title', () => {
  const wrapper = setup();
  const title = findByTestAttr(wrapper, 'create-user-title');
  expect(title.length).toBe(1);
});

test('renders a username input', () => {
  const wrapper = setup();
  const usernameInput = findByTestAttr(wrapper, 'username-input');
  expect(usernameInput.length).toBe(1);
});

test('renders a submit button', () => {
  const wrapper = setup();
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  expect(submitButton.length).toBe(1);
});
