import { render, cleanup, screen } from '@testing-library/react';
import ShapePicker from './shapePicker'

afterEach(cleanup);

it('renders ShapePicker correctly', () => {
	let dummyShapesHistory = [{
		shape: 'square',
		length: 20,
		color: '#000000'
	}]
	render(<ShapePicker shapesHistory={dummyShapesHistory}/>);
	const shapeElement = screen.getByTestId("shapePicker");
	expect(shapeElement).toBeInTheDocument();
})