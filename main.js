function preload() {

}

function setup() {
    canvas = creatCanvas(640, 400);
    canvas.position(110, 250);
    Video = creatCapture(VIDEO);
    video.hide();
    tinit_color = "";
}

function draw() {
    Image(video, 0, 0, 640, 400);
    tint(tint_color);
    fil(0,128,0);
    stroke(0,128,0);
    ellipse(56, 46, 55, 55);
    rect(30, 20, 55, 55);

}

function take_snapshot() {
    save('blue.png');
}

function filter_tint() {
    tinit_color = document.getElementById("color_name").ariaValueMax;
}