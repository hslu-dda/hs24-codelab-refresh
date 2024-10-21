let data = [];

const powerMin = 60;
const powerMax = 180;

const categories = [
    "Naruto",
    "One Piece",
    "Dragon Ball",
    "Fullmetal Alchemist",
    "Death Note",
    "One Punch Man",
    "Attack on Titan",
    "Demon Slayer",
];

let xScale = d3.scaleLinear().domain([powerMin, powerMax]).range([0, 800]);
let yScale = d3.scalePoint().domain(categories).range([0, 800]);

function setup() {
    createCanvas(800, 800);
    noLoop();

    d3.csv("./data/manga_characters.csv").then((csv) => {
        data = csv;
        console.log(csv);
        redraw();
    });
}

function draw() {
    background(220);
    if (data.length) {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];

            noStroke();
            fill(255, 0, 0);

            let x = xScale(element["Power Level"]);
            let y = yScale(element["Category"]);

            ellipse(x, y, 5, 5);
            console.log(element)
            
        }
    }
}
