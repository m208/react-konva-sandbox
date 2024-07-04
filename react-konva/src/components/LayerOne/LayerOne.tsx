import { Layer, Circle, Rect } from "react-konva";

const WIDTH = 3000;
const HEIGHT = 3000;
const NUMBER = 200;

export const LayerOne = (): JSX.Element => {
    const generatedNodes = [];
    for (let i = 0; i < NUMBER; i++) {
        generatedNodes.push({
            x: WIDTH * Math.random(),
            y: HEIGHT * Math.random()
        })
    }

    return (
        <Layer >
            <Rect width={WIDTH} height={HEIGHT} fill={'aliceblue'}></Rect>
            {generatedNodes.map((node, i) => (
                <Circle
                    key={i}
                    stroke="black"
                    fill={'yellow'}
                    radius={25}
                    x={node.x}
                    y={node.y}
                />
            ))}
        </Layer>
    )
}

