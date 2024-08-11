
import { Layer } from "react-konva";
import { StageDragHandler, Tile } from "./Tile";
import { createRef, forwardRef, useImperativeHandle, useRef } from "react";

const T_WIDTH = 400;
const T_HEIGHT = 400;

const T_LINES_COUNT = 10;
const T_COLUMNS_COUNT = 10;
const T_COUNT = T_LINES_COUNT * T_COLUMNS_COUNT;

const generateTilesData = () => {
    const lines = new Array(T_LINES_COUNT).fill(null)
        .map((line, lineIndex) => new Array(T_COLUMNS_COUNT).fill(null)
            .map((col, colIndex) => T_LINES_COUNT * lineIndex + colIndex));

    return lines;
}

interface TilesLayerProps { }

export const TilesLayer = forwardRef<StageDragHandler, TilesLayerProps>((props, ref) => {
    const lines = generateTilesData();
    const tilesRef = useRef(new Array(T_COUNT).fill(null).map(() => createRef<StageDragHandler>()));

    useImperativeHandle(ref, () => ({
        onDragEnd() {
            tilesRef.current.forEach(el => el.current?.onDragEnd())
        },
    }));

    return (
        <Layer>
            {lines.map((line, y) => {
                return line.map((el, x) => (
                    <Tile
                        key={el}
                        ref={tilesRef.current[el]}
                        imgPath={`https://placehold.co/${T_WIDTH}x${T_HEIGHT}/moccasin/gray.png?text=${el}`}
                        x={x * T_WIDTH}
                        y={y * T_HEIGHT}
                        width={T_WIDTH}
                        height={T_HEIGHT}
                    />
                ))
            }
            )}
        </Layer >
    )
})

