import { Stage } from 'react-konva';
import { LayerOne } from './components/LayerOne/LayerOne';
import { LayerTwo } from './components/LayerTwo/LayerTwo';
import { LayerImages } from './components/LayerImages/LayerImages';

const scaleBy = 1.1;

function App() {

  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas

    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      draggable={true}
      onWheel={(e) => {
        e.evt.preventDefault();

        const stage = e.target.getStage();
        if (!stage) return

        const oldScale = stage.scaleX();

        const direction = e.evt.deltaY > 0 ? 1 : -1;
        const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

        stage.scale({ x: newScale, y: newScale });

        const pointer = stage.getPointerPosition();
        if (!pointer) return
        const mousePointTo = {
          x: (pointer.x - stage.x()) / oldScale,
          y: (pointer.y - stage.y()) / oldScale,
        };
        const newPos = {
          x: pointer.x - mousePointTo.x * newScale,
          y: pointer.y - mousePointTo.y * newScale,
        };
        stage.position(newPos);

      }}
    >
      <LayerOne></LayerOne>
      <LayerTwo></LayerTwo>
      <LayerImages></LayerImages>
    </Stage >

  )
}

export default App
