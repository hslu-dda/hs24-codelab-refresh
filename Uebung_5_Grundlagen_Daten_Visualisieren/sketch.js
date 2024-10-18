let count = 16;

// Define colors for different categories
let color1 = "#ff0000"; // Red
let color2 = "#0000ff"; // Blue
let color3 = "#ffff00"; // Yellow

let data = [];

let rScale = d3.scaleSqrt().domain([0, 100]).range([0, 100]);

function setup() {
    createCanvas(800, 800);
    background(220);
    noStroke();
    noLoop();

    // Load the data
    d3.json("./data/manga.json").then((json) => {
        console.log("loaded data:", json);
        data = json;
        // when the data is loaded, redraw the sketch
        redraw();
    });
}

function draw() {
    // Define grid columns and rows
    let cols = count / 4;
    let rows = count / 4;

    // Calculate spacing between the elements
    let spacingX = width / cols;
    let spacingY = height / rows;

    // a counter to access the data item
    let index = 0;

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            // get the data item
            const item = data[index];

            // berechne x/y position
            let x = i * spacingX + spacingX / 2;
            let y = j * spacingY + spacingY / 2;

            if (item) {
                if (item["category"] == "Naruto") {
                    // Red
                    fill(color1);
                } else if (item["category"] == "One Piece") {
                    // Blue
                    fill(color2);
                } else if (item["category"] == "Dragon Ball") {
                    // Yellow
                    fill(color3);
                } else {
                    // Fallback, Black
                    fill(0);
                }
                let r = rScale(item["value"])
                ellipse(x, y, r, r);
            }

            // increase the data index
            index++;
        }
    }
}

