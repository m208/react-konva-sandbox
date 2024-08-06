import { Layer, Image as ReactImage } from "react-konva";
import useImage from 'use-image';

export const LayerImages = () => {
    const [image] = useImage(`https://res.cloudinary.com/dodpx3cj9/image/upload/f_auto,q_auto/v1/mockup-application/oipwr4jv0pdxgyq3qxx0`);

    return (
        <Layer>
            <ReactImage draggable={true} image={image} x={100} y={100}></ReactImage>
        </Layer >
    )
}

