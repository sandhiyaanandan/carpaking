import {createStore} from 'redux';
import {reducers} from './reducer';
export function configureMyStore()
{
	const store = createStore(reducers);
	return store;
}

export const store = configureMyStore();