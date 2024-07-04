import { Layer, Circle } from "react-konva";

export const LayerOne = (): JSX.Element => (
    <Layer >
        <Circle x={150} y={100} stroke="black" fill={'yellow'} radius={25} />
        <Circle x={150} y={150} stroke="black" fill={'yellow'} radius={25} />
    </Layer>
);