import React from 'react';
import { shallow } from 'enzyme';
import TopMenu from './TopMenu';

describe('TopMenu component', () => {
  const wrapper = shallow(<TopMenu />);
  it('should render nav links', () => {
    const links = wrapper.find('NavLink');
    expect(links).toHaveLength(3);
    expect(links.find({ path: '/' })).toHaveLength(1);
    expect(links.find({ path: '/frequency' })).toHaveLength(1);
    expect(links.find({ path: '/duplicates' })).toHaveLength(1);
  });
});
