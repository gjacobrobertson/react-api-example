import React from 'react';
import { shallow } from 'enzyme';
import DuplicateItem from './DuplicateItem';

describe('DuplicateItem component', () => {
  it('should render each person in its entry', () => {
    const wrapper = shallow(
      <DuplicateItem entry={[{ name: 'foo' }, { name: 'bar' }]} />
    );
    const people = wrapper.find('Person');
    expect(people.find({ name: 'foo' })).toHaveLength(1);
    expect(people.find({ name: 'bar' })).toHaveLength(1);
  });
});
