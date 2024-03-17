//initial debug
console.log('init');
//initialize canvas  
const _tsc0 = document.querySelector('canvas');
const _2dsp = _tsc0.getContext('2d');
//resize function
function resize() {
    _tsc0.width = window.innerWidth;
    _tsc0.height = window.innerHeight;
}
//i do not understand these commands or why they work the way they do
//i guess they are other initial declarations?
window.onload = drawPoints; //this initializes the whole thing -- thus at the top. we've been waiting on this one for a while.
window.onresize = resize;
resize();
//window.onmousemove = move;
window.onmousedown = down;
window.onmouseup = up;/**/
//window.onclick = click;


//declare and initialize radius, fill, and stroke color
const radius = 10;
const fillStyle = '#22cccc';
const strokeStyle = '#009999';

//declare empty vector/array of points to be drawn
let points = [
    { x: 488, y: 231},
    { x: 723, y: 585},
    { x: 401, y: 420},
    { x: 726, y: 307}
];

//ok, so in this version, we're going to have a few coordinates and have them be moveable

//window.onload = loadScreen;

const object = { a: 1, b: 2}

function drawPoints() {

    console.log('init');
    console.log(points.length);
    //console.log(points.x);

    for(var i = 0; i < points.length; i++) {
        console.log(points[i]);
        console.log(points[i].x)
        drawNode(points[i].x, points[i].y);
    }
}
//ok, now i need if then logic to get the js to draw my points
//V_1 /**/
function drawNode(x, y) {
    _2dsp.beginPath();
    _2dsp.fillStyle = fillStyle;
    _2dsp.arc(x, y, radius, 0, Math.PI * 2, true);
    _2dsp.strokeStyle = strokeStyle;
    _2dsp.stroke();
    _2dsp.fill();
}/**/
//keep a document of best practices ---- analyze for efficacy  (It'll pay)
// code block 2------------------------------------------------------------------------------------------------------------------


//SO HERE, WE WILL HAVE MOVE NODE FUNCTIONALITY

function within(xp, yp, x, y) {
    if ((xp > (x - radius)) && (xp < (x + radius))
        && (yp > (y - radius)) && (yp < (y + radius))) {
            return true; 
        }
    else
        {
            return false;
        }
}

function down(c) {
    let target;
    let getTarget;
    console.log('down');
    console.log(target, getTarget);
    //let target = within(c.x, c.y);
    for(var i = 0; i < points.length; i++) {
        //points[i].x  && points[i].y 
        //nest within?
        getTarget = within(c.x, c.y, points[i].x, points[i].y);
        console.log(within(c.x, c.y, points[i].x, points[i].y));
        target = getTarget
        console.log(getTarget);
        console.log(c.x, c.y);
    }
    if (target) {
        selection = target;
        //move(selection);

    }
}
//window.onmousedown = down;


/*
function move(c) {

    if(selection) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        selection.x = c.x;
        selection.y = c.y;
        drawNode(selection.x, selection.y);
        drawPoints();
    }
    
}*/

function up(c) {
    console.log('up');
    selection = undefined;
}

//V_1 /**/  

/*
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



*/

//ok so for here :   I need to get it to select the body when I click

//so on mousedown?   or on mouseup?
