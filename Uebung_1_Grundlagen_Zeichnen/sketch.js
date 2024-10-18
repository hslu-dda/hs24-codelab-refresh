let count = 16;
let color1 = "#ff0000";
let color2 = "#0000ff";

function setup() {
    createCanvas(800, 800);
    background(220);
    noStroke();

    // Dividiere die Anzahl Rechtecke durch 4 um die Spalten/Zeilen des Grids zu definieren.
    let cols = count / 4;
    let rows = count / 4;

    // Berechne den Abstand zwischen den Elementen
    let spacingX = width / cols;
    let spacingY = height / rows;

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            // berechne x/y position
            let x = i * spacingX + spacingX / 2;
            let y = j * spacingY + spacingY / 2;

            // gerade oder ungerade?
            if (i % 2 == 0) {
                // gerade
                fill(color1);
            } else {
                // ungerade
                fill(color2);
            }
            ellipse(x, y, 25, 25);
        }
    }
}