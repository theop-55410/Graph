



console.log('init');

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onresize = resize;
resize();



