import Konva from "konva";
import { Shape } from "konva/lib/Shape";
import { useRef } from "react";
import { Layer, Rect, Circle, Line, Text } from "react-konva";

const defaultColor = '#00D2FF';


export const LayerTwo = (): JSX.Element => {

    const tooltipRef = useRef<Konva.Text>(null);
    const tooltip = tooltipRef.current

    return (
        <Layer
            onMouseOver={(evt) => {
                const stage = evt.target.getStage();

                const shape = evt.target as Shape;
                document.body.style.cursor = 'pointer';
                shape.fill('red');

                if (tooltip) {
                    tooltip.visible(true)
                    const mousePos = stage!.getPointerPosition();
                    tooltip.position({
                        x: mousePos!.x + 5,
                        y: mousePos!.y + 5,
                    })

                    tooltip.text(shape.name());
                }

            }}
            onMouseOut={(evt) => {
                const shape = evt.target as Shape;
                document.body.style.cursor = 'default';
                shape.fill(defaultColor);

                if (tooltip) {
                    tooltip.visible(false)
                }
            }}
        >
            <Rect width={50} height={50} fill={defaultColor} name='Figure 1 RECT' />
            <Circle x={200} y={200} stroke="black" fill={defaultColor} radius={50} name='Figure 2 Circle' />
            <Line
                points={[23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93]}
                fill={defaultColor}
                stroke={'black'}
                strokeWidth={1}
                closed={true}
                tension={0.3}
                opacity={0.7}
                name='Figure 3 BLOB'
                draggable={true}
            >
            </Line>

            <Text
                ref={tooltipRef}
                fontFamily='Calibri'
                fontSize={12}
                padding={5}
                visible={true}
                stroke='black'
                strokeWidth={1}
            >
            </Text>
        </Layer >
    )
}