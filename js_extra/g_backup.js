//console.log('init');
//bscchck
//fn resezie
const _tsc0 = document.querySelector('canvas');

const _2dsp = _tsc0.getContext('2d');


/*
_2dsp.width = 1000;
_2dsp.height = 1000;
*/

var points = [];


function resize() {
    _tsc0.width = window.innerWidth;
    _tsc0.height = window.innerHeight;
}
//not sure what the meaning of this is...
window.onresize = resize;
resize();


/*let _ctr = {
    x = 400,
    y = 400
};*/

//determine teh fill and style later
const radius = 20;
const fillStyle = '#22cccc';
const strokeStyle = '#009999';

function drawNode(point) {
    _2dsp.beginPath();
    _2dsp.fillStyle = fillStyle;
    _2dsp.arc(point.x, point.y, radius, 0, Math.PI * 2, true);
    _2dsp.strokeStyle = strokeStyle;
    _2dsp.stroke();
    _2dsp.fill();
}
/*function _draw() {
}*/

//what i want to be doing with the nomenclature i have is calling "click" => "node" 
function node(g) {
    let point = {
        x: g.x,
        y: g.x
    };
    //so we don't really have to explicitily push the xcoord and y coord to the function because it's assigned in the exterior array .... ok
    points.push(point);
    //test this hypothesis
                               //poor programming procedure and practices people .... practice your c++!
                               //so technically    not even just technically, just. LOL   XD!!!
    drawNode(point);
    //_ctr(point);
}

window.onclick = node; 


