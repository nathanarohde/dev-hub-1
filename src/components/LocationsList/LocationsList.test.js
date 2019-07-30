import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LocationsList from './LocationsList';
import Location from '../Location/Location';

configure({adapter: new Adapter()});

describe('<LocationsList />', () => {
  let wrapper;

  let locationsList = [
    { formatted_address: 'Address 001', id: 1001 },
    { formatted_address: 'Address 002', id: 1002 },
    { formatted_address: 'Address 003', id: 1003 },
    { formatted_address: 'Address 004', id: 1004 },
    { formatted_address: 'Address 005', id: 1005 }
  ]

  beforeEach(() => {
    wrapper = shallow(<LocationsList locations = { locationsList } total_count = { 50 }/>);
  });

  it('Should contain a total count', () => {
    expect(wrapper.text()).toMatch('50');
  });

  it('Should contains a Location for every object', () => {
    expect(wrapper.find(Location)).toHaveLength(locationsList.length);
  });
})
