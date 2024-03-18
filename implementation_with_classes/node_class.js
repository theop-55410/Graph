export default class Node {


    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    radius = 10;
    fillStyle = '#22cccc';
    strokeStyle = '#009999';

    drawNode(x, y) {
        _2dsp.beginPath();
        _2dsp.fillStyle = fillStyle;
        _2dsp.arc(x, y, radius, 0, Math.PI * 2, true);
        _2dsp.strokeStyle = strokeStyle;
        _2dsp.stroke();
        _2dsp.fill();
    }

}