import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Location from './Location';

configure({adapter: new Adapter()});

describe('<Location />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Location/>);
    wrapper.setProps({ formatted_address: '698 Peoria St, Aurora CO 80011', id: 352802 });
  });

  // Tests if data displays, unpopulated prop not tested for because the assumption is data WILL be present

  it('Should display a formatted_address', () => {
    expect(wrapper.render().find('698 Peoria St, Aurora CO 80011'));
  });

  it('Should display an id', () => {
    expect(wrapper.render().find('352802'));
  });
})
