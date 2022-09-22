import { checkPropTypes } from 'prop-types';

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );
  return propsErr;
};

export default findByTestAttr;
