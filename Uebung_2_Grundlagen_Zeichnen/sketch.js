function setup() {
    createCanvas(800, 800);
    background(220);
    noStroke();
    fill('#ff0000');

    angleMode(DEGREES); // Use degrees for angle calculations

    translate(width / 2, height / 2); // Move the origin to the center

    let radius = 250; // Radius of the circle
    let squareSize = 30; // Size of each square
    let totalSquares = 32; // Number of squares
    let angleStep = 360 / totalSquares; // Angle between each square

    for (let i = 0; i < totalSquares; i++) {
        let angle = i * angleStep; // Calculate the angle for this square
        let x = radius * cos(angle); // X position on the circle
        let y = radius * sin(angle); // Y position on the circle

        // Draw each square with the top-left corner adjusted for center alignment
        push(); // Save the current transformation state
        translate(x, y); // Move to the square's position
        rotate(angle); // Rotate the square so it faces toward the center
        rectMode(CENTER);
        rect(0, 0, squareSize, squareSize); // Draw the square
        pop(); // Restore the transformation state
    }
}

