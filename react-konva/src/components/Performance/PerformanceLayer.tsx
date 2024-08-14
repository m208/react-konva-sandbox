import { Layer, Text, Rect } from "react-konva";

const T_WIDTH = 100;
const T_HEIGHT = 100;

const generateMatrix = (a: number, b: number) => {
    const lines = new Array(a).fill(null)
        .map((line, lineIndex) => new Array(b).fill(null)
            .map((col, colIndex) => a * lineIndex + colIndex));

    return lines;
}

type LayerProps = {
    camera: {
        x: number,
        y: number
    },
    scale: number
}

export const PerformanceLayer = ({ camera, scale }: LayerProps): JSX.Element => {
    const lines = generateMatrix(100, 100);
    const colors = ["red", "orange", "cyan", "green", "blue", "purple"];

    console.log(`camera: `, camera);
    console.log(`scale: `, scale);

    return (
        <Layer >
            <>
                {lines.map((line, y) => {

                    const isOutY =
                        y * T_WIDTH * scale < camera.y - window.innerHeight ||
                        y * T_WIDTH * scale > camera.y + window.innerHeight * 2

                    if (isOutY) {
                        return null;
                    }

                    return line.map((el, x) => {

                        const isOutX =
                            x * T_WIDTH * scale < camera.x - window.innerWidth ||
                            x * T_WIDTH * scale > camera.x + window.innerWidth * 2

                        if (isOutX) {
                            return null;
                        }
                        return (

                            <>
                                <Rect
                                    fill={colors[el % colors.length]}
                                    stroke={'black'}
                                    x={x * T_WIDTH}
                                    y={y * T_HEIGHT}
                                    width={T_WIDTH}
                                    height={T_HEIGHT}
                                />
                                <Text
                                    fill={'white'}
                                    text={'' + el}
                                    x={x * T_WIDTH + T_WIDTH / 2}
                                    y={y * T_HEIGHT + T_HEIGHT / 2}
                                />
                            </>

                        )
                    })
                }
                )}
            </>
        </Layer>
    )
}