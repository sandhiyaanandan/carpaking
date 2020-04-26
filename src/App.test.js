import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import {findByTestAttr} from './../jestutils';
import toJson from 'enzyme-to-json';

const setUp =()=>{
	const component = shallow(<App />);
	return component;
};

describe('App', ()=>{
	let wrapper;
	beforeEach(() =>{
		wrapper = setUp();
	});
	
	it('should render the App Component correctly', ()=>{   
    	expect(toJson(wrapper)).toMatchSnapshot();
  	});

	it('should render App component correctly', ()=>{
		let comp = findByTestAttr(wrapper, 'Parking-Header');
		expect(comp.length).toBe(1);
	});
});




