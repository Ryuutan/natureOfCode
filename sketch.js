let rocks = [];
let magnets = [];

const mu = 0.1;
const G = 0.6;

function setup() {
    createCanvas(windowWidth, windowHeight);
	background(255);

	for (let i = 0; i < 500; i++) {
	    rocks.push(new Mover(random(width), random(height), random(120, 180)));
	}

	for (let i = 0; i < 1; i++) {
		magnets.push(new Attractor(width / 2, height / 2, random(600, 1200)))
	}

    wind = createVector(0.1, 0);
    gravity = createVector(0, 0.2);
}

function draw() {
    background(50, 50, 50, 10);


	// for (const magnet of magnets) {
	// 	for (const rock of rocks) {
	// 		if (rock.collision(magnet)) {
	// 			console.log(rock);
	// 			rocks.splice(rock, 1);
	// 		}
	// 		magnet.attract(rock);
	// 	}
	// 	magnet.solid();
	// 	magnet.show();
	// }

	for (let i = 0; i < magnets.length; i++) {
		for (let j = 0; j < rocks.length; j++) {
			magnets[i].attract(rocks[j]);
			if (rocks[j].collision(magnets[i])) {
				rocks.splice(j, 1);
			}
		}
		magnets[i].solid();
		magnets[i].show();
	}

	for (const rock of rocks) {
		rock.edges();
		rock.visualize(rock.a);
		rock.update();
		rock.show();
	}
}