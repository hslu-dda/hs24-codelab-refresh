function setup() {
    createCanvas(800, 800);
    background(220);
    noStroke();
    fill("#0000ff");

    let barHeight = 20; // Höhe der Balken
    let barCount = 25; // Anzahl der Balken

    for (let i = 0; i < barCount; i++) {
        let barLength = random(25, 750); // Zufällige Länge zwischen 25 und 775
        let y = i * (barHeight + 10) + 25; // Y-Position der Balken

        // Zeichne den Balken
        rect(25, y, barLength, barHeight);
    }
}