import React from 'react';
import './shapes.css'


//Circle component
export const Circle = ({radius, color}) => {

  if(radius > 250) radius = 250;
  
  return (
        <div data-testid="circle" className="canvas">
          <svg className="mainDiagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <g stroke={color} fill={color}>
              <circle strokeWidth="1" className="strokeAnimation" cx="250" cy="250" r={radius}/>
            </g>
          </svg>
        </div>
  );
}

//Mock circle component
export const MiniCircle = ({radius, color}) => {
  return (
        <div data-testid="miniCircle" className="minicanvas">
          <svg className="miniDiagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <g fill={color}>
              <circle cx="15" cy="15" r={15}/>
            </g>
          </svg>
        </div>
  );
}
      
//Square component  
export const Square = ({length, color}) => { 

  if(length > 500) length = 450;
  let x = (500 - length) / 2;
  return (
        <div data-testid="square" className="canvas">
          <svg className="mainDiagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <g stroke={color} fill={color}>
              <rect strokeWidth="1" className="strokeAnimation" x={x} y={x} width={length} height={length} />
            </g>
          </svg>
        </div>
  );
}

//Mock square component
export const MiniSquare = ({length, color}) => { 
  return (
        <div data-testid="miniSquare" className="minicanvas">
          <svg className="miniDiagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <g fill={color}>
              <rect x={0} y={0} width={30} height={30} />
            </g>
          </svg>
        </div>
  );
}

//Rectangle component 
export const Rectangle = ({length, breadth, color}) => {

  if(length > 500 || breadth > 500){
    if(length > breadth){

      breadth = 100;
      length = 400;

    } else {
      length =  100;
      breadth = 400;
    }
  }

  let x = (500 - length) / 2;
  let y = (500 - breadth) / 2;
  return (
        <div data-testid="rectangle" className="canvas">
          <svg className="mainDiagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <g stroke={color} fill={color}>
              <rect strokeWidth="1" className="strokeAnimation" x={x} y={y} width={length} height={breadth} />
            </g>
          </svg>
        </div>
  );  
}

//Mock rectangle component
export const MiniRectangle = ({color, length, breadth }) => {
  return (
        <div data-testid="miniRectangle" className="minicanvas">
          <svg className="miniDiagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <g fill={color}>
              <rect x={0} y={7} width={30} height={15}  />
            </g>
          </svg>
        </div>
  );  
}

