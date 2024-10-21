function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

let angle = -45;

function draw() {
    background(220);

    let x = 200;
    let y = 200;

    strokeWeight(8);
    point(x, y);

    let r = 100;

    let dx = r * cos(angle);
    let dy = r * sin(angle);

    let x2 = x + dx;
    let y2 = y + dy;

    point(x2, y2);

    // angle++;

}
