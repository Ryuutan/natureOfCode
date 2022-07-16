let planets = [];

const mu = 0.1;
const G = 1;

let cooldown;

function setup() {
    createCanvas(600, 600);
	background(255);
	
	for (let i = 0; i < 5; i++) {
	    planets.push(new Mover(random(120, 360)));
	}

    wind = createVector(0.1, 0);
    gravity = createVector(0, 0.2);
}

function draw() {
    background(50, 50, 50);
	
	for (rock of planets) {
		for (other of planets) {
			if(rock != other) {
				rock.collision(other);
				rock.attract(other);
			}
		}
	}


	for (const rock of planets) {
		rock.edges();
		rock.visualize(rock.a);
		rock.update();
		rock.show();
	}

	// if (mouseClicked == true) {
	// 	magnets.push(new Attractor(mouseX, mouseX, random(600, 1200)));
	// }
}