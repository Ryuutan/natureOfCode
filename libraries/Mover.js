class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.v = p5.Vector.random2D();
        this.a = createVector();
        this.v.mult(random(2));
        this.mass = m;
        this.r = sqrt(this.mass);
    }
  
    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.a.add(f);
    }

    friction() {
        let diff = height - (this.pos.y + this.r);
        if (diff < 1) {
            let friction = this.v.copy();
            friction.normalize();
            friction.mult(-1);

            let normal = this.mass;
            friction.setMag(mu*normal);
            this.applyForce(friction);
        }
    }

    drag() {
        // something to do with drag, haven't done it yet
    }
    
    collision(other) {
        if (p5.Vector.sub(this.pos, other.pos).mag() < this.r + other.r) {
            this.v.mult(0);
            return true;
        } else {
            return false;
        }
    }

    edges() {
        if (this.pos.x >= width - this.r) {
            this.pos.x = width - this.r;
            this.v.x *= -1;
        } if (this.pos.x <= this.r) {
            this.pos.x = this.r;
            this.v.x *= -1;
        } if (this.pos.y >= height - this.r) {
            this.pos.y = height - this.r;
            this.v.y *= -1;
        } if (this.pos.y <= this.r) {
            this.pos.y = this.r;
            this.v.y *= -1;
        }
    }
  
    update() {
        this.v.add(this.a);
        this.pos.add(this.v);
        this.a.set(0, 0);
    }
  
    show() {
        fill(255);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    } 

    visualize(force) {
        stroke(255);
        strokeWeight(2);
        let yell = force.copy();
        yell.mult(10000);
        line(this.pos.x, this.pos.y, this.pos.x + yell.x, this.pos.y + yell.y);
    }
  }