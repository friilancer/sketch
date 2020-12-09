import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import ShapePicker from './components/shapePicker/shapePicker';
import { ShapeCanvas } from './components/shapeCanvas/shapeCanvas';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[])

  return dimensions;
}


const App = () => {
    
  //Instantiate empty array that'll contain data of shapes drawn
  const [shapesHistory, setShapesHistory] = useState([]);

  //Get window dimensions
  const {height, width} = useWindowDimensions();

  //When the application mounts, load previously drawn shapes if any
  useEffect(() => {
    const getShapes = JSON.parse(localStorage.getItem('shapes'));

    getShapes ? setShapesHistory([...getShapes]) : setShapesHistory([]);
  }, [])

  

  //Update shapes drawn on localStorage
  useEffect(() =>  {

    localStorage.setItem('shapes', JSON.stringify(shapesHistory));

  }, [shapesHistory])

 
  return (
    <>
      {
      width > 750 && height > 550 ? 

      <div className="layout"> 
      <ShapePicker
        shapesHistory={shapesHistory}
        drawnShape = {(newShape) => setShapesHistory(newShape)}      
      />
      <ShapeCanvas 
        shapesHistory={shapesHistory[0]}
      />      
    </div>

    : 

    <div className="errorDisplay">
      <h2>Your screen size seems smaller than our canvas...</h2>
    </div>

    }
    </>
  );
}

export default App;
