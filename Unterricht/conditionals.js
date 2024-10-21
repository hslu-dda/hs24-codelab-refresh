function setup(){
    createCanvas(400, 400);

    background(220);
    noStroke();
    fill(255, 0, 0)

    for (let i = 0; i < 10; i++) {
        ellipse(random(0, width), random(0, height), 20, 20)
        
    }
}

function draw(){

}