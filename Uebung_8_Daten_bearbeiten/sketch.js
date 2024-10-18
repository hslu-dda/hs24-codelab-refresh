let data = [];

// Lege die Kategorien aus dem Datensatz fest.
// Diese werden benötigt, um die x-Achse (xScale) zu definieren.
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
// Diese werden benötigt, um die y-Achse (yScale) zu definieren.
const powerMin = 100;
const powerMax = 180;

// Die Ränder, die von den Scales (Skalen) abgezogen werden, um Platz zu schaffen.
let leftBorder = 100;
let rightBorder = 100;
let topBorder = 50;
let bottomBorder = 60;

// Definiere die X-Achse (xScale) für die Kategorien
let xScale = d3
    .scalePoint()
    .domain(categories)
    .range([leftBorder, 800 - rightBorder]);

// Definiere die Y-Achse (yScale) für die Power-Levels
let yScale = d3
    .scaleLinear()
    .domain([powerMin, powerMax])
    .range([800 - bottomBorder, topBorder]);

function setup() {
    createCanvas(800, 800);
    background(220);
    noStroke();
    noLoop();

    // Lade die Daten aus der CSV-Datei.
    d3.csv("./data/manga_characters.csv").then((csv) => {
        console.log("Daten geladen:", csv);
        // Die geladenen Daten (csv) werden an die Funktion filterData übergeben,
        // und das Ergebnis wird in der Variable 'data' gespeichert.
        data = filterData(csv);
        // Wir prüfen, ob die Daten richtig gefiltert wurden.
        console.log("Gefilterte Daten:", data);
        // Wenn die Daten geladen und gefiltert sind, wird die Skizze neu gezeichnet.
        redraw();
    });
}

// Eine Funktion, die die CSV-Daten erhält und filtert
function filterData(completeData) {
    // Ein leerer Array, um die gefilterten Objekte zu speichern.
    let filteredData = [];
    // Eine forEach-Schleife (for-Schleife würde auch funktionieren).
    completeData.forEach(item => {
        // Variablen für das Alter und Power-Level des Charakters.
        let itemAge = int(item["Age"]);
        let itemPower = int(item["Power Level"]);
        // Wenn das Alter größer oder gleich 20 und das Power-Level über 100 ist,
        // wird das Datenobjekt hinzugefügt.
        if (itemAge > 20 && itemPower > 100) {
            filteredData.push(item);
        }
    });
    // Nachdem die Schleife fertig ist, geben wir den gefilterten Array zurück.
    return filteredData;
}

function draw() {
    // Prüfe, ob die Daten vorhanden sind, um Fehler zu vermeiden.
    if (data && data.length) {
        // Iteriere über das Daten-Array.
        for (let i = 0; i < data.length; i++) {
            // Speichere das aktuelle Daten-Element in einer Variablen für eine einfachere Handhabung.
            const item = data[i];

            // Berechne die Position anhand der vorher definierten d3-Scales.
            let xPos = xScale(item["Category"]);
            let yPos = yScale(item["Power Level"]);

            // Zeichne den Punkt (Ellipse) für den Charakter.
            fill("#0000ff");
            ellipse(xPos, yPos, 10, 10);

            // Zeichne eine Beschriftung (Legende) für den Charakter.
            let label = item["Label"];
            textSize(10);
            text(label, xPos + 8, yPos + 3);
        }

        // Zeichne die Y-Achse (Linie).
        stroke(0);
        line(leftBorder, topBorder, leftBorder, height - bottomBorder + 10);

        // Definiere und zeichne die Power-Level Labels auf der Y-Achse.
        let power_labels = [100, 113.33, 126.67, 140, 153.33, 166.67, 180];
        for (let i = 0; i < power_labels.length; i++) {
            const powerLabel = power_labels[i];
            let yTextPos = yScale(powerLabel);
            textAlign(RIGHT);
            noStroke();
            fill(0);
            text(powerLabel, 80, yTextPos);
        }

        // Zeichne die X-Achse (Linie).
        stroke(0);
        line(leftBorder, height - bottomBorder + 10, width - rightBorder, height - bottomBorder + 10);

        // Zeichne die Kategorien-Labels auf der X-Achse.
        for (let i = 0; i < categories.length; i++) {
            const categoryLabel = categories[i];
            let xTextPos = xScale(categoryLabel);
            textAlign(CENTER);
            noStroke();
            fill(0);
            text(categoryLabel, xTextPos, height - 25);
        }
    }
}

