import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

describe('Person component', () => {
  const wrapper = shallow(
    <Person name="User" title="Tester" email="user@example.com" />
  );
  it('should render a card for the person', () => {
    expect(wrapper.find('Card').props()).toMatchObject({
      header: { content: 'User' },
      meta: { content: 'Tester' },
      description: { content: 'user@example.com' },
    });
  });
});
