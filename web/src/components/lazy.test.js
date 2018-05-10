import React from 'react';
import { shallow } from 'enzyme';
import lazy from './lazy';

describe('lazy components', () => {
  const MyComponent = lazy(() => <span>Test</span>);
  describe('when loaded', () => {
    const load = jest.fn();
    const wrapper = shallow(<MyComponent load={load} loaded />);

    it('should invoke load', () => {
      expect(load).toHaveBeenCalled();
    });

    it('should render the target', () => {
      expect(wrapper.dive().text()).toEqual('Test');
    });
  });

  describe('when not loaded', () => {
    const load = jest.fn();
    const wrapper = shallow(<MyComponent load={load} />);

    it('should invoke load', () => {
      expect(load).toHaveBeenCalled();
    });

    it('should render a loader', () => {
      expect(wrapper.find('Loader')).toHaveLength(1);
    });
  });
});
