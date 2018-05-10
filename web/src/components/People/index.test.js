import React from 'react';
import { shallow } from 'enzyme';
import People from './index';

describe('People component', () => {
  const load = jest.fn();
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  const metadata = {
    paging: {
      current_page: 2,
      total_pages: 5,
    },
  };
  const location = {
    search: 'page=2',
  };
  const wrapper = shallow(
    <People load={load} data={data} metadata={metadata} location={location} />
  );

  it('should render pagination twice', () => {
    const pagination = wrapper.find('Pagination');
    expect(pagination).toHaveLength(2);
    expect(pagination.first().props()).toMatchObject({
      activePage: 2,
      totalPages: 5,
    });
  });

  it('should render each person in the data', () => {
    const people = wrapper.find('Person');
    expect(people).toHaveLength(2);
    expect(people.at(0).key()).toEqual('1');
    expect(people.at(1).key()).toEqual('2');
    expect(people.at(0).props()).toMatchObject({
      id: 1,
    });
  });
});
