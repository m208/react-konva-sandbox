import { Stage, Layer, Rect, Circle, Line, Text, } from 'react-konva';
import './App.css'
import { Shape } from 'konva/lib/Shape';
import { useRef } from 'react';

const defaultColor = '#00D2FF';

function App() {

  const tooltipRef = useRef(null);
  const tooltip = tooltipRef.current as Shape | null;

  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas

    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer
        onMouseOver={(evt) => {
          const stage = evt.target.getStage();

          const shape = evt.target as Shape;
          document.body.style.cursor = 'pointer';
          shape.fill('red');

          if (tooltip) {
            tooltip.visible(true)
            const mousePos = stage!.getPointerPosition();
            tooltip.position({
              x: mousePos!.x + 5,
              y: mousePos!.y + 5,
            })

            tooltip.setAttr('text', shape.name())
          }

        }}
        onMouseOut={(evt) => {
          const shape = evt.target as Shape;
          document.body.style.cursor = 'default';
          shape.fill(defaultColor);

          if (tooltip) {
            tooltip.visible(false)
          }
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

        <Text
          ref={tooltipRef}
          fontFamily='Calibri'
          fontSize={12}
          padding={5}
          visible={false}
          stroke='black'
          strokeWidth={1}
        >
        </Text>
      </Layer>
    </Stage >

  )
}

export default App
