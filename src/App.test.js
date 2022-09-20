import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import findByTestAttr, { testStore } from './Utils';

const setUp = () => {
  const wrapper = shallow(<App />);
  return wrapper;
};

describe('App Component', () => {
  it('Should render without errors', () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});
