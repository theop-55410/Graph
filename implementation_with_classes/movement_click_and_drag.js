
window.onmousedown = down;
//tell canvas to call down function when user holds the mouse down


//go through all points and nodes area to sea if user's mouse is held down on 
//a particular node. if not, then no call. if yes, call function

function within() {
    
}

function down(c) {
    let target = within(c.x, c.y);
    //target evaluates to true if within, if not, evaluates to false
    if (target) {
        selection = target;
    }
}



window.onmousemove = move;

function move(c) {
    if (selection) {
        selection.x = c.x;
        selection.y = c.y;
        draw();
    }
}

window.onmouseup = up;

function up(c) {
    selection = undefined;
}