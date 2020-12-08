import React from 'react';
import './shapeCanvas.css';
import {Circle, Square, Rectangle, MiniCircle, MiniSquare, MiniRectangle} from '../shapes/shapes'

//React component where drawn shapes would be displayed
export const ShapeCanvas = ({shapesHistory = {
  shape : 'circle' , 
  radius: 0,
  length: 0,
  breadth: 0,
  color: ''
 }}) => {

  const {shape, radius, length, breadth, color} = shapesHistory;

    return(
    <div data-testid="shapeCanvas" className="canvasheet">
      <div className="text-center">
      
      {
        radius > 250 || length > 500 || breadth > 500 ? 
        <h6> Your drawing seems to have exceeded our canvas...scaled it perfectly for you </h6> : '' 
      }
      <h3>Draw something</h3>
      </div>
      {shape === 'circle' && <Circle radius={radius} color={color} />}
      {shape === 'square' && <Square length={length} color={color} />}
      {shape === 'rectangle' && <Rectangle length={length} breadth={breadth} color={color} />}
    </div>
  );
}

//Shape component for displaying drawn shapes as icons
export const MiniShapeCanvas = ({shape, radius, length, breadth, color}) => {  
  
  return(
    <div data-testid="miniShapeCanvas">
      {shape === 'circle' && <MiniCircle color={color} radius={radius}/>}
      {shape === 'square' && <MiniSquare color={color} length={length} />}
      {shape === 'rectangle' && <MiniRectangle color={color} length={length} breadth={breadth} />}
    </div>
  );
}