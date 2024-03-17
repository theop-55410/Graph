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

// code block 1------------------------------------------------------------------------------------------------------------------

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

// code block 3------------------------------------------------------------------------------------------------------------------

//V_1 /* */
function click(e) {
    let node = {
        x: e.x,
        y: e.y,
        radius: 10,
        fillStyle: '#22cccc',
        strokeStyle: '#009999'
    };
    nodes.push(node);
    draw();
}

//--------------------------------------------------------------------------------------------------------------------


/**/var selection = undefined;

function within(x, y) {
    return nodes.find(n => {
        return x > (n.x - n.radius) && 
            y > (n.y - n.radius) &&
            x < (n.x + n.radius) &&
            y < (n.y + n.radius);
    });






    
}

/*function move(e) {
    if (selection) {
        selection.x = e.x;
        selection.y = e.y;
        drawNode(selection);
    }
}*/

function move(e) {
    if (selection) {
        selection.x = e.x;
        selection.y = e.y;
        draw();
    }
}

function down(e) {
    let target = within(e.x, e.y);
    if (target) {
        selection = target;
    }
}

function up(e) {
    selection = undefined;
}

window.onmousemove = move;
window.onmousedown = down;
window.onmouseup = up;/**/





//don't understand this....
function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        context.beginPath();
        context.fillStyle = node.fillStyle;
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2, true);
        context.strokeStyle = node.strokeStyle;
        context.fill();
        context.stroke();
    }
}

function move(e) {
    if (selection) {
        selection.x = e.x;
        selection.y = e.y;
        selection.moving = true;
        draw();
    }
}

/*
function up(e) {
    if (!selection || !selection.moving) {
        let node = {
            x: e.x,
            y: e.y,
            radius: 10,
            fillStyle: '#22cccc',
            strokeStyle: '#009999',
            selectedFill: '#88aaaa'
        };
        nodes.push(node);
        draw();
    }
    if (selection) {
        delete selection.moving;
        delete selection.selected;
    }
    selection = undefined;
    draw();
}
*/


context.fillStyle = node.selected ? node.selectedFill : node.fillStyle;



