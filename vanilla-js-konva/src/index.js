const width = window.innerWidth;
const height = window.innerHeight;

const T_WIDTH = 100;
const T_HEIGHT = 100;

const stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
    draggable: true
});

const layer = new Konva.Layer();

const lines = generateMatrix(100, 100);
const colors = ["red", "orange", "cyan", "green", "blue", "purple"];

const tiles = lines.map((line, y) => {
    return line.map((el, x) => {

        const rect = new Konva.Rect({
            fill: colors[el % colors.length],
            stroke: 'black',
            x: x * T_WIDTH,
            y: y * T_HEIGHT,
            width: T_WIDTH,
            height: T_HEIGHT
        });

        const text = new Konva.Text({
            fill: 'white',
            text: el,
            x: x * T_WIDTH + T_WIDTH / 2,
            y: y * T_HEIGHT + T_HEIGHT / 2,
        });

        layer.add(rect);
        layer.add(text);

    })
}
)

stage.add(layer);


function generateMatrix(a, b) {
    const lines = new Array(a).fill(null)
        .map((line, lineIndex) => new Array(b).fill(null)
            .map((col, colIndex) => a * lineIndex + colIndex));

    return lines;
}