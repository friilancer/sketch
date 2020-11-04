import { render, cleanup, screen } from '@testing-library/react';
import { ShapeCanvas, MiniShapeCanvas } from './shapeCanvas';

afterEach(cleanup);

it('renders ShapeCanvas correctly', () => {
	render(<ShapeCanvas />);
	const shapeElement = screen.getByTestId("shapeCanvas");
	expect(shapeElement).toBeInTheDocument();
})

it('renders MiniShapeCanvas correctly', () => {
	render(<MiniShapeCanvas />);
	const miniShapeElement = screen.getByTestId("miniShapeCanvas");
	expect(miniShapeElement).toBeInTheDocument();
})