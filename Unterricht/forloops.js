let objNum = 6;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    noStroke();
    fill(255, 0, 0);

    let spacingX = width / objNum;

    for (let i = 0; i < objNum; i++) {
        let x = spacingX * i + spacingX / 2;
        let y = 50;
        ellipse(x, y, 20, 20);
    }

    fill(0, 0, 255);
    let spacingY = 50;
    for (let i = 0; i < objNum; i++) {
        for (let j = 0; j < objNum; j++) {
            let x = spacingX * i;
            let y = spacingY * j;
            ellipse(x, y, 20, 20);
        }
    }
}
