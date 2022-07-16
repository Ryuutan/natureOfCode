let rocks = [];
let magnets = [];

const mu = 0.1;
const G = 0.6;

let cooldown;

function setup() {
    createCanvas(windowWidth, windowHeight);
	background(255);

	for (let i = 0; i < 10; i++) {
	    rocks.push(new Mover(random(width), random(height), random(120, 180)));
	}

    wind = createVector(0.1, 0);
    gravity = createVector(0, 0.2);
}

function draw() {
    background(50, 50, 50, 10);


	for (const rock of rocks) {
		rock.edges();
		rock.visualize(rock.a);
		rock.update();
		rock.show();
	}

	// if (mouseClicked == true) {
	// 	magnets.push(new Attractor(mouseX, mouseX, random(600, 1200)));
	// }
}