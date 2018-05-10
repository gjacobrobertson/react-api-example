import React from 'react';
import { shallow } from 'enzyme';
import Duplicates from './index';

describe('Duplicates component', () => {
  describe('initial render', () => {
    const build = jest.fn();
    const wrapper = shallow(
      <Duplicates loading={false} loaded={false} build={build} dupes={[]} />
    );
    it('should invoke build action', () => {
      expect(build).toHaveBeenCalled();
    });
  });

  describe('when loading', () => {
    const build = jest.fn();
    const wrapper = shallow(
      <Duplicates loading={true} loaded={false} build={build} dupes={[]} />
    );

    it('should not invoke build', () => {
      expect(build).not.toHaveBeenCalled();
    });

    it('should display a loader', () => {
      expect(wrapper.find('Loader').find({ active: true })).toHaveLength(1);
    });
  });

  describe('when loaded', () => {
    const build = jest.fn();
    const dupes = [[{ id: 1 }, { id: 2 }], [{ id: 3 }, { id: 4 }]];
    const wrapper = shallow(
      <Duplicates loading={false} loaded={true} build={build} dupes={dupes} />
    );

    it('should render duplicates', () => {
      const items = wrapper.find('DuplicateItem');
      expect(items).toHaveLength(dupes.length);
      expect(items.at(0).key()).toEqual('1:2');
      expect(items.at(1).key()).toEqual('3:4');
      expect(items.first().props()).toMatchObject({
        entry: dupes[0],
      });
    });

    it('should not invoke build', () => {
      expect(build).not.toHaveBeenCalled();
    });
  });
});
