//this is test suite
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';

configure({adapter: new Adapter()});

describe('<Header/>', () => {
  it('should have header tag', () =>{
    //shallow will test the parent component. not child components. this is from enzyme
    const wrapper = shallow(<Header />)

    //now let's use jest's validation library, expect
    expect(wrapper.find('header')).toBeTruthy();

  });

  it('header tag should have one inner element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header')).toHaveLength(1);  //inner element length
  });

  it('h1 should have My App text', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header h1').children().contains('My App')).toEqual(true);
    // expect(wrapper.contains(<header>
    //                           <h1>My App</h1>
    //                         </header>)).toEqual(true);

  });
})