import { memo } from "react";
import { Layer, Text, Rect } from "react-konva";

const T_WIDTH = 100;
const T_HEIGHT = 100;

const generateMatrix = (a: number, b: number) => {
    const lines = new Array(a).fill(null)
        .map((line, lineIndex) => new Array(b).fill(null)
            .map((col, colIndex) => a * lineIndex + colIndex));

    return lines;
}


export const PerformanceLayer = (): JSX.Element => {
    const lines = generateMatrix(100, 100);
    const colors = ["red", "orange", "cyan", "green", "blue", "purple"];

    const Tiles = () => {

        return (
            <>
                {lines.map((line, y) => {
                    return line.map((el, x) => (
                        <>
                            <Rect
                                fill={colors[Math.floor(Math.random() * colors.length)]}
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

                    ))
                }
                )}
            </>
        )

    }

    const MemoizedTiles = memo(Tiles);

    return (
        <Layer >
            <Tiles />
            {/* <MemoizedTiles /> */}
        </Layer>
    )
}