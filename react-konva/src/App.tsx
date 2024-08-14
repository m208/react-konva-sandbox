import { Stage } from 'react-konva';
// import { LayerThree, StageDragHandler } from './components/LayerThree/LayerThree';
// import { useRef } from 'react';
// import { TilesLayer } from './components/Tiles/TilesLayer';
// import { LayerOne } from './components/LayerOne/LayerOne';
// import { LayerTwo } from './components/LayerTwo/LayerTwo';
import { PerformanceLayer } from './components/Performance/PerformanceLayer';

const scaleBy = 1.1;

function App() {
  //const layerRef = useRef<StageDragHandler>(null);

  return (

    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      draggable={true}
      onDragEnd={() => {
        // layerRef.current?.onDragEnd();
      }}
      onWheel={(e) => {
        // layerRef.current?.onDragEnd();

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

      <PerformanceLayer />

      {/* <TilesLayer ref={layerRef}></TilesLayer> */}
      {/* <LayerOne></LayerOne>
      <LayerTwo></LayerTwo>
      <LayerThree ref={layerRef}></LayerThree> */}
    </Stage >

  )
}

export default App
