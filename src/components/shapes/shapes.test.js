import { render, cleanup, screen } from '@testing-library/react';
import { Square, MiniSquare, Circle, MiniCircle, Rectangle, MiniRectangle} from './shapes';

afterEach(cleanup);

it('renders circles correctly', () => {
	render(<Circle />);
	const shapeElement = screen.getByTestId("circle");
	expect(shapeElement).toBeInTheDocument();
})

it('renders miniCircle correctly', () => {
	render(<MiniCircle />);
	const shapeElement = screen.getByTestId("miniCircle");
	expect(shapeElement).toBeInTheDocument();
})

it('renders squares correctly', () => {
	render(<Square />);
	const shapeElement = screen.getByTestId("square");
	expect(shapeElement).toBeInTheDocument();
})

it('renders miniSquare correctly', () => {
	render(<MiniSquare />);
	const shapeElement = screen.getByTestId("miniSquare");
	expect(shapeElement).toBeInTheDocument();
})

it('renders rectangles correctly', () => {
	render(<Rectangle />);
	const shapeElement = screen.getByTestId("rectangle");
	expect(shapeElement).toBeInTheDocument();
})

it('renders miniRectangle correctly', () => {
	render(<MiniRectangle />);
	const shapeElement = screen.getByTestId("miniRectangle");
	expect(shapeElement).toBeInTheDocument();
})