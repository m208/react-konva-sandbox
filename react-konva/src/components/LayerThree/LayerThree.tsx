import Konva from "konva";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Layer, Image as ReactImage, Text } from "react-konva";
import useImage from 'use-image';

interface LayerProps { }

export type StageDragHandler = {
    onDragEnd: () => void;
};

export const LayerThree = forwardRef<StageDragHandler, LayerProps>((props, ref) => {
    const [counter, setCounter] = useState(0);

    const imageRef = useRef<Konva.Image>(null);

    useImperativeHandle(ref, () => ({
        onDragEnd() {
            console.log(
                imageRef.current?.isClientRectOnScreen()
                    ? 'Image on the screen'
                    : 'Image out of the screen'
            );

            setCounter(prev => prev + 1);
        },
    }));

    const [image] = useImage(`https://res.cloudinary.com/dodpx3cj9/image/upload/f_auto,q_auto/v1/mockup-application/oipwr4jv0pdxgyq3qxx0`);

    return (
        <Layer>
            <Text text={'' + counter}></Text>
            <ReactImage draggable={true} ref={imageRef} image={image} x={100} y={100}></ReactImage>
        </Layer >
    )
})

