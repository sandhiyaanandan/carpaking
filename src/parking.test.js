import React from 'react';
import { shallow } from 'enzyme';
import Parking from './parking';
import {findByTestAttr} from './../jestutils';
import toJson from 'enzyme-to-json';

const setUp =()=>{
    const component = shallow(<Parking />);
	return component;
};

jest.mock('react-router', () => ({     ...jest.requireActual('react-router'),    
 useHistory: () => ({ push: jest.fn() }) }));  
describe('Parking', ()=>{
	let wrapper;
	beforeEach(() =>{
		wrapper = setUp();
	});
	
	it('should render the Parking Component correctly', ()=>{   
    	expect(toJson(wrapper)).toMatchSnapshot();
  	});

	it('should render Parking component correctly', ()=>{
		let comp = findByTestAttr(wrapper, 'Parking-Page-Header');
		expect(comp.length).toBe(1);
	});
});




