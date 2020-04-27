import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './login';
import {findByTestAttr} from './../jestutils';
import toJson from 'enzyme-to-json';
import Parking from './Parking';
const setUp =()=>{
    const component = shallow(<Login />);
    return component;
};

describe('Login', ()=>{
  let wrapper;
    beforeEach(() =>{
        wrapper = setUp();
    });

it('should render the Login Component correctly', ()=>{   
      expect(toJson(wrapper)).toMatchSnapshot();
    });

it('should render Login component correctly', ()=>{
  let comp = findByTestAttr(wrapper, 'login');
  expect(comp.length).toBe(1);
});

// make our assertion and what we expect to happen 
 it('should render loginForm without throwing an error', () => {
   expect(wrapper.find('form#loginForm').exists()).toBe(true);
 })

describe('Login input', () => { 
 it('should respond to change event and change the state of the Login name', () => {
   wrapper.find('#name').simulate('change', {target: {value: 'user'}});
   expect(wrapper.state('userName')).toEqual('user');
  })
});

describe('Password input', () => {
 it('should respond to change event and change the state of the Password', () => {
   wrapper.find('#password').simulate('change', {target: {value: 'admin'}});
   expect(wrapper.state('password')).toEqual('admin');
  })

});

describe('Submit details', () => {
  it('should call handleFormSubmit when form submitted via button', () => {
    window.alert = jest.fn();
    wrapper.find('form#loginForm').find('[className="submitButton"]').simulate('click');
    window.alert.mockClear();
    }) 
});
});