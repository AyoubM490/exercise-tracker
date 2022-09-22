import React from 'react';
import { shallow } from 'enzyme';
import findByTestAttr, { checkProps } from '../Utils';
import ExerciseList from './exercises-list.component';

const defaultProps = {
  exercises: [
    {
      _id: '5f9f1b9b9b9b9b9b9b9b9b9b',
      username: 'test user',
      description: 'test description',
      duration: 0,
      date: '2020-10-29T00:00:00.000Z',
      __v: 0,
    },
  ],
  deleteExercise: () => {},
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ExerciseList {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-exercise-list');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { exercises: [], deleteExercise: () => {} };
  checkProps(ExerciseList, expectedProps);
});

test('renders a title', () => {
  const wrapper = setup();
  const title = findByTestAttr(wrapper, 'title');
  expect(title.length).toBe(1);
});

test('renders a table', () => {
  const wrapper = setup();
  const table = findByTestAttr(wrapper, 'table-body');
  expect(table.length).toBe(1);
});

test('renders a table body', () => {
  const wrapper = setup();
  const tableBody = findByTestAttr(wrapper, 'table-body');
  expect(tableBody.length).toBe(1);
});

test('renders a table row', () => {
  const wrapper = setup();
  const tableRow = findByTestAttr(wrapper, 'table-row');
  expect(tableRow.length).toBe(1);
});
