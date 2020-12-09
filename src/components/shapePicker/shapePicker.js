import React, { useState, Fragment } from 'react';
import './shapePicker.css';
import { MiniShapeCanvas } from '../shapeCanvas/shapeCanvas';

const ShapePicker = ({shapesHistory, drawnShape}) => {

    const [shape, setShape] = useState("square");
    const [length, setLength] = useState('');
    const [breadth, setBreadth] = useState('');
    const [radius, setRadius] = useState('');
    const [color, setColor] = useState('#000000');
    
    const [dimensions, setDimensions] = useState({
      length : true,
      breadth: false,
      radius: false
    })

    //Toggle input on forms to be shown based on selected shape
    const toggle = (shape) => {
      if(shape === 'square') setDimensions({
        length : true,
        breadth: false,
        radius: false
      })

      if(shape === 'rectangle') setDimensions({
        length : true,
        breadth: true,
        radius: false,
      })

      if(shape === 'circle') setDimensions({
        length : false,
        breadth: false,
        radius: true
      })
    }

    const handleLengthChange = (e) => setLength(e.target.value);
    const handleBreadthChange = (e) => setBreadth(e.target.value);
    const handleRadiusChange = (e) => setRadius(e.target.value);
    const handleColorChange = (e) => setColor(e.target.value)
    const handleShapeChange = (e) => {
      setShape(e.target.value);
      toggle(e.target.value);
    }

    //Reset values to defaults after a shape has been drawn
    const reset = (shape) => {
      setShape(shape);
      toggle(shape);
      setRadius('');
      setBreadth('');
      setLength('');
      setColor('#000000'); 
    }

    const updateShapes = (shape, length, breadth, radius, color) => {
        drawnShape([{
          shape,
          length,
          breadth,
          radius,
          color
          },
          ...shapesHistory
        ]);
    }

    const clearShapes = () => drawnShape([]);
    const onSubmit = (e) => {

      e.preventDefault();
      if(radius || length || breadth){
        drawnShape([{
          shape,
          length,
          breadth,
          radius,
          color
          },
          ...shapesHistory
        ]);
        reset(shape);
      }
    }
  return (
    <>
      <div data-testid="shapePicker" className="controller">
        <h1> Set to draw... </h1>
        <form onSubmit={onSubmit}>
        <label htmlFor="shapes"> Pick a shape </label>
        <select id="shapes" name="shapes" value={shape} onChange={handleShapeChange}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
          <option value="rectangle">Rectangle</option>
        </select>

        {
          dimensions.length &&
          <div>
            <label htmlFor="length">
            Length of shape
            </label>
            <input
              type="number"
              id="length"
              name="length"
              placeholder="length..."
              value={length}
              onChange={handleLengthChange}
            />
          </div>
        }
        { dimensions.breadth && 
          <div>
            <label htmlFor="breadth">
            Breadth of shape
            </label>
            <input
              type="number"
              id="breadth"
              name="breadth"
              placeholder="breadth..."
              value={breadth}
              onChange={handleBreadthChange}
            />
          </div>
        }
        {
          dimensions.radius && 
          <div>
            <label htmlFor="radius">
            Radius of shape
            </label>
            <input
              type="number"
              name="radius"
              id="radius"
              placeholder="radius..."
              value={radius}
              onChange={handleRadiusChange}
            />
          </div>
        }
        <div>
          <label htmlFor="color"> Pick a color </label>
          <input
            type="color"
            name="color"
            id="color"
            value={color}
            onChange={handleColorChange}
          />
        </div>

          <button className="draw"> Draw </button>
        </form>
        <button className="clear" onClick={clearShapes}> Clear shapes history </button>

        <div>
          {!shapesHistory[0] ? <h5> You are yet to draw any shape </h5> : 
            shapesHistory.length > 20 ? 
            <h5> You've drawn {shapesHistory.length} shapes. Here are the 20 most recent shapes you've drawn </h5> : <h5> {shapesHistory.length} most recent shapes you've drawn </h5>}
          <div className="drawnShapesDisplay">
            {shapesHistory.length > 20 ? 
              shapesHistory.slice(0, 19).map(({shape, color, length, radius, breadth}, index) => 
              <MiniShapeCanvas
                key={index}
                shape={shape}
                color={color}
                radius={radius}
                length={length}
                breadth={breadth}
              />
            ) :
              shapesHistory.map(({shape, color, length, radius, breadth}, index) => 
              <MiniShapeCanvas
                key={index}
                shape={shape}
                color={color}
                radius={radius}
                length={length}
                breadth={breadth}
              />
            )}
          </div>
        </div>

      </div>

    </>
    );
}

export default ShapePicker