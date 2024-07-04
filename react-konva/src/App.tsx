import { Stage } from 'react-konva';
import './App.css'
import { LayerOne } from './components/LayerOne/LayerOne';
import { LayerTwo } from './components/LayerTwo/LayerTwo';

function App() {

  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas

    <Stage width={window.innerWidth} height={window.innerHeight}>
      <LayerOne></LayerOne>
      <LayerTwo></LayerTwo>
    </Stage >

  )
}

export default App
