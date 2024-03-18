//import m from "../get_nodes_to_show/m";



console.log('init');

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onresize = resize;
resize();

window.onclick = click;

function click(c) {
    console.log("click")
}

