//initial debug
console.log('init');
//basic structure and variables
const _tsc0 = document.querySelector('canvas');
const _2dsp = _tsc0.getContext('2d');

var points = [];

//HPYOTHETICALLY ON THIS ONE, i JUST NEED TO COMMENT OUT ONE FUNCTION TO HAVE THE FUNKY FUNKS GOIN????!!?

//V_1
function resize() {
    _tsc0.width = window.innerWidth;
    _tsc0.height = window.innerHeight;
}
//not sure what the meaning of this is...
window.onresize = resize;
resize();
//this program is massively, massively incomplete.

const radius = 10;
const fillStyle = '#22cccc';
const strokeStyle = '#009999';

//V_1 /**/
function drawNode(point) {
    _2dsp.beginPath();
    _2dsp.fillStyle = fillStyle;
    _2dsp.arc(point.x, point.y, radius, 0, Math.PI * 2, true);
    _2dsp.strokeStyle = strokeStyle;
    _2dsp.stroke();
    _2dsp.fill();
}/**/
//keep a document of best practices ---- analyze for efficacy  (It'll pay)
// code block 2------------------------------------------------------------------------------------------------------------------

//V_1 /**/   
function node(g) {
    let point = {
        x: g.x,
        y: g.y
    };
    points.push(point);
    drawNode(point);
    console.log(point);
    console.log(points);
}
/**/

window.onclick = node;


//ok so for here :   I need to get it to select the body when I click

//so on mousedown?   or on mouseup?


