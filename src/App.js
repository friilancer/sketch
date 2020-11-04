import React, { useState, useEffect } from 'react';
import './App.css';
import ShapePicker from './components/shapePicker/shapePicker';
import { ShapeCanvas } from './components/shapeCanvas/shapeCanvas';


const App = () => {
    
  const [shapesHistory, setShapesHistory] = useState([]);

  useEffect(() => {
    const getShapes = JSON.parse(localStorage.getItem('shapes'));

    getShapes ? setShapesHistory([...getShapes]) : setShapesHistory([]);
  }, [])

  useEffect(() =>  {

    localStorage.setItem('shapes', JSON.stringify(shapesHistory));

  }, [shapesHistory])

 
  return (
    <div className="layout"> 
      <ShapePicker
        shapesHistory={shapesHistory}
        drawnShape = {(newShape) => setShapesHistory(newShape)}
      
      />
      <ShapeCanvas 
        shapesHistory={shapesHistory[0]}
      />      
    </div>
  );
}

export default App;
