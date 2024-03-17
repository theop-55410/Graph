//initial debug
console.log('init');
//basic structure and variables
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

var nodes = [];

//HPYOTHETICALLY ON THIS ONE, i JUST NEED TO COMMENT OUT ONE FUNCTION TO HAVE THE FUNKY FUNKS GOIN????!!?

//V_1
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
//not sure what the meaning of this is...
window.onresize = resize;
resize();




//V_1 /**/
function drawNode(node) {
    context.beginPath();
    context.fillStyle = node.fillStyle;
    context.arc(node.x, node.y, node.radius, 0, Math.PI * 2, true);
    context.strokeStyle = node.strokeStyle;
    context.stroke();
    context.fill();
}/**/
//keep a document of best practices ---- analyze for efficacy  (It'll pay)
// code block 2------------------------------------------------------------------------------------------------------------------

//V_1 /**/   
function click(e) {
    let node = {
        x: e.x,
        y: e.y,
        radius: 10,
        fillStyle: '#22cccc',
        strokeStyle: '#009999'
    };
    nodes.push(node);
    drawNode(node);
}
/**/

window.onclick = click;