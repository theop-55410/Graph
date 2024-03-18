




//get canvas element, name variable time space context
const _tsc0 = document.querySelector('canvas');
//initialize canvas to 2d space (a plane)
const _2dsp = _tsc0.getContext('2d');


//resize function
function resize() {
    _tsc0.width = window.innerWidth;
    _tsc0.height = window.innerHeight;
}
