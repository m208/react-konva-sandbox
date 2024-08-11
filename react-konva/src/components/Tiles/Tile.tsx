import Konva from "konva";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Image, Rect } from "react-konva";
import useImage from 'use-image';

interface TileProps {
    x: number;
    y: number;
    width: number;
    height: number;
    imgPath: string;
}

export type StageDragHandler = {
    onDragEnd: () => void;
};

export const Tile = forwardRef<StageDragHandler, TileProps>((props, ref) => {
    const { imgPath, x, y, height, width } = props;
    const noImg = `https://placehold.co/${width}x${height}.png?text=no_img`;

    const [url, setUrl] = useState(noImg);

    const imageRef = useRef<Konva.Image>(null);
    const [image] = useImage(url);

    useImperativeHandle(ref, () => ({
        onDragEnd() {
            if (imageRef.current?.isClientRectOnScreen()) {
                setUrl(imgPath);
            }
        },
    }));

    return (
        <>
            <Rect stroke={'black'} x={x} y={y} width={width} height={height} ></Rect>
            <Image ref={imageRef} image={image} x={x} y={y}></Image>
        </>
    )
})