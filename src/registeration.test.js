import React from 'react';
import { shallow, mount } from 'enzyme';
import Registeration from './registeration';
import {findByTestAttr} from './../jestutils';
import toJson from 'enzyme-to-json';

const setUp =()=>{
    const component = shallow(<Registeration />);
    return component;
};

describe('Registeration', ()=>{
  let wrapper;
    beforeEach(() =>{
        wrapper = setUp();
    });

it('should render the Registeration Component correctly', ()=>{   
      expect(toJson(wrapper)).toMatchSnapshot();
    });

it('should render Registeration component correctly', ()=>{
  let comp = findByTestAttr(wrapper, 'registeration');
  expect(comp.length).toBe(1);
});

// make our assertion and what we expect to happen 
 it('should render RegisterForm without throwing an error', () => {
   expect(wrapper.find('form#regForm').exists()).toBe(true);
 })

describe(' Register Name', () => { 
 it('should respond to change event and change the state of the Login name', () => {
   wrapper.find('[name="userName"]').simulate('change', {target: {name:"userName", value: 'Uuser'}});
   expect(wrapper.state('userName')).toEqual('Uuser');
  })
});

describe('Register Password', () => {
 it('should respond to change event and change the state of the Password', () => {
   wrapper.find('[name="password"]').simulate('change', {target: {value: 'admin'}});
   expect(wrapper.state('password')).toEqual('admin');
  })
});
describe('Register Confirm Password', () => {
 it('should respond to change event and change the state of the Confirm Password', () => {
   wrapper.find('[name="confirmPwd"]').simulate('change', {target: {value: 'admin'}});
   expect(wrapper.state('password')).toEqual('admin');
  })
});
describe('Register CarName', () => {
 it('should respond to change event and change the state of the Carname', () => {
   wrapper.find('[name="carName"]').simulate('change', {target: {value: 'Toyota'}});
   expect(wrapper.state('carName')).toEqual('Toyota');
  })
});

describe('Register CarNumber', () => {
 it('should respond to change event and change the state of the Carnumber', () => {
   wrapper.find('[name="carNumber"]').simulate('change', {target: {value: 'TN78JK8976'}});
   expect(wrapper.state('carNumber')).toEqual('TN78JK8976');
  })
});

});