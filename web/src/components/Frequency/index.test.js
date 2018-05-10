import React from 'react';
import { shallow } from 'enzyme';
import Frequency from './index';

describe('Frequency component', () => {
  describe('on initial render', () => {
    const build = jest.fn();
    const wrapper = shallow(<Frequency build={build} frequencies={[]} />);
    it('should invoke build', () => {
      expect(build).toHaveBeenCalled();
    });
  });

  describe('with frequencies', () => {
    const build = jest.fn();
    const wrapper = shallow(
      <Frequency build={build} frequencies={[['A', 1], ['B', 2]]} />
    );

    it('should not invoke build', () => {
      expect(build).not.toHaveBeenCalled();
    });

    it('should render frequency items', () => {
      const items = wrapper.find('FrequencyItem');
      expect(items.at(0).key()).toEqual('A');
      expect(items.at(1).key()).toEqual('B');
      expect(items.at(0).props()).toMatchObject({
        char: 'A',
        count: 1,
      });
    });
  });
});
