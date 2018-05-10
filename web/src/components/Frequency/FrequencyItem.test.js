import React from 'react';
import { shallow } from 'enzyme';
import FrequencyItem from './FrequencyItem';

describe('FrequencyItem component', () => {
  it('should render the char and count', () => {
    const wrapper = shallow(<FrequencyItem char="A" count={1234} />);
    expect(
      wrapper
        .find('StatisticLabel')
        .children()
        .text()
    ).toEqual('A');
    expect(
      wrapper
        .find('StatisticValue')
        .children()
        .text()
    ).toEqual('1,234');
  });
});
