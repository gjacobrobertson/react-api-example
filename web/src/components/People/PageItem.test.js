import React from 'react';
import { shallow } from 'enzyme';
import PageItem from './PageItem';

describe('PageItem component', () => {
  const wrapper = shallow(<PageItem from="?page=2&foo=bar" value={4} />);
  it('should render a link', () => {
    const link = wrapper.find('Link');
    expect(link).toHaveLength(1);
    expect(link.props()).toMatchObject({
      to: { search: '?page=4&foo=bar' },
    });
  });
});
