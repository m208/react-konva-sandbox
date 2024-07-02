import { Stage, Layer, Rect, Circle, Line, } from 'react-konva';
import './App.css'
import { Shape } from 'konva/lib/Shape';

const defaultColor = '#00D2FF';

function App() {
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas

    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer
        onMouseOver={(evt) => {
          const shape = evt.target as Shape;
          document.body.style.cursor = 'pointer';
          shape.fill('red');
        }}
        onMouseOut={(evt) => {
          const shape = evt.target as Shape;
          document.body.style.cursor = 'default';
          shape.fill(defaultColor);
        }}
      >
        <Rect width={50} height={50} fill={defaultColor} name='Figure 1 RECT' />
        <Circle x={200} y={200} stroke="black" fill={defaultColor} radius={50} name='Figure 2 Circle' />
        <Line
          points={[23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93]}
          fill={defaultColor}
          stroke={'black'}
          strokeWidth={1}
          closed={true}
          tension={0.3}
          opacity={0.7}
          name='Figure 3 BLOB'
        >
        </Line>
      </Layer>
    </Stage >

  )
}

export default App
