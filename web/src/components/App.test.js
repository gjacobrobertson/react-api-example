import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  const app = shallow(<App />);

  it('renders the TopMenu', () => {
    expect(app.find('TopMenu')).toHaveLength(1);
  });

  it('renders the People Route', () => {
    expect(app.find('Route').find({ path: '/' })).toHaveLength(1);
  });

  it('renders the Frequency Route', () => {
    expect(app.find('Route').find({ path: '/frequency' })).toHaveLength(1);
  });

  it('renders the Duplicates Route', () => {
    expect(app.find('Route').find({ path: '/duplicates' })).toHaveLength(1);
  });
});
