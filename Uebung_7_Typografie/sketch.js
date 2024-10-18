let data = [];

// Lege die Kategorien aus dem Datensatz fest.
// Diese werden benötigt, um die xScale zu definieren.
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

// Lege das minimale und maximale Power-Level aus dem Datensatz fest.
// Diese werden benötigt, um die yScale zu definieren.
const powerMin = 60;
const powerMax = 180;

// Ränder, die von den Scales abgezogen werden.
let leftBorder = 100;
let rightBorder = 100;
let topBorder = 50;
let bottomBorder = 60;

// XScale mit Kategorien
let xScale = d3
    .scalePoint()
    .domain(categories)
    .range([leftBorder, 800 - rightBorder]);

// YScale mit dem Power-Level
let yScale = d3
    .scaleLinear()
    .domain([powerMin, powerMax])
    .range([800 - bottomBorder, topBorder]);

function setup() {
    createCanvas(800, 800);
    background(220);
    noStroke();
    noLoop();

    // Lade die Daten
    d3.csv("./data/manga_characters.csv").then((csv) => {
        console.log("Daten geladen:", csv);
        data = csv;
        // Wenn die Daten geladen sind, zeichne die Skizze neu.
        redraw();
    });
}

function draw() {
    // Teste, ob die Daten vorhanden sind, um Fehler vorzubeugen.
    if (data && data.length) {
        // Iteriere über das Daten-Array.
        for (let i = 0; i < data.length; i++) {
            // Speichere das aktuelle Daten-Element in einer Variablen zur einfacheren Handhabung.
            const item = data[i];

            // Kalkuliere die Position mittels der oben festgelegten d3-Scales.
            let xPos = xScale(item["Category"]);
            let yPos = yScale(item["Power Level"]);

            // Kontrolliere, dass du brauchbare Werte erhältst.
            // console.log(item, xPos, yPos);

            // Zeichne die Elemente.
            fill("#0000ff");
            ellipse(xPos, yPos, 10, 10);

            // Zeichne eine Legende.
            let label = item["Label"];
            textSize(10);
            text(label, xPos + 8, yPos + 3);
        }

        // Zeichne eine Y-Achse.
        stroke(0);
        line(leftBorder, topBorder, leftBorder, height - bottomBorder + 10);
        let power_labels = [60, 73.33, 86.67, 100, 113.33, 126.67, 140, 153.33, 166.67, 180];
        // Zeichne alle Power Labels.
        for (let i = 0; i < power_labels.length; i++) {
            const powerLabel = power_labels[i];
            let yTextPos = yScale(powerLabel);
            console.log(yTextPos);
            textAlign(RIGHT);
            noStroke();
            fill(0);
            text(powerLabel, 80, yTextPos);
        }

        // Zeichne eine X-Achse.
        stroke(0);
        line(leftBorder, height - bottomBorder + 10, width - rightBorder, height - bottomBorder + 10);
        // Zeichne alle Kategorien-Labels.
        for (let i = 0; i < categories.length; i++) {
            const categoryLabel = categories[i];
            let xTextPos = xScale(categoryLabel);
            // console.log(xTextPos);
            textAlign(CENTER);
            noStroke();
            fill(0);
            text(categoryLabel, xTextPos, height - 25);
        }
    }
}
