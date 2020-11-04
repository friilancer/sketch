import { cleanup } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDom from 'react-dom'

afterEach(cleanup);

test('it renders without crashing', () => {
	const div = document.createElement('div');
	ReactDom.render(<App />, div);
	ReactDom.unmountComponentAtNode(div);
})