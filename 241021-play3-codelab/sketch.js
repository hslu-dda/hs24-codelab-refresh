// globale variable für die geladenen daten
let data = [];

// minimaler und maximaler wert aus den daten
let minPower = 60;
let maxPower = 180;

// d3 function um das power_level (domain) in eine X position umzurechnen zwischen 0 und 400 (range)
let xScale = d3.scaleLinear().domain([minPower, maxPower]).range([0, 400]);

function setup() {
    createCanvas(400, 400);

    // d3 funktion um das "manga_characters.csv" im order "data" zu laden
    // dazu muss d3 im header von index.html importiert sein
    // das laden dauert einen moment, sobald die daten da sind ("then"), arbeiten wir damit
    d3.csv("./data/manga_characters.csv").then((csv) => {
        // die geladenen daten sind in der variable 'csv' und werden an die globale variable 'data' übergeben
        data = csv;
        // check ob alles geklappt hat
        console.log(data);
    });
}

function draw() {
    background(220);

    // wir prüfen ob die daten da sind bevor wir damit weiterarbeiten
    if (data.length > 0) {
        // wir nutzen forEach um über den Array zu loopen
        // jedes objekt im array wird in der variable item zwischengespeichert
        data.forEach((item) => {
            // wir greifen innerhalb des objektes auf das "Power Level" zu
            let power_level = item["Power Level"];
            // wir kontrollieren, dass wir den wert erhalten
            console.log(power_level)

            // wir senden den wert an die oben definierte xScale funktion
            let x = xScale(power_level);

            // wir legen y fix fest
            let y = height / 2;

            // wir zeichnen die daten von links nach rechts entsprechend ihrem power level
            // links = low, rechts = high
            ellipse(x, y, 5, 5);
        });
    }

    // ein normaler loop um 100 kreise an zufälliger position zu zeichnen
    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        noStroke();
        fill(255, 0, 0, 10);
        ellipse(x, y, 20, 20);
    }
    
    // wir stoppen den loop
    noLoop();
}
