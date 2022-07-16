class Mover {
    constructor(m) {
        this.pos = p5.Vector.random2D();
        this.pos.setMag(random(100, 200));
        this.v = this.pos.copy();
        this.v.setMag(3);
        this.v.rotate(PI / 2);
        this.pos.add(width / 2, height / 2);
        this.a = createVector();
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
            let ow = p5.Vector.sub(this.v, other.v).mult(-1);
            let wo = p5.Vector.sub(this.v, other.v);
            this.pos.add(ow);
            other.pos.add(wo);
            this.v.add(ow);
            other.v.add(wo);
            this.a.mult(0);
        }
    }

    attract(other) {
        let force = p5.Vector.sub(this.pos, other.pos);
        let distanceSq = force.magSq();
        let strength = ((this.mass * other.mass) / distanceSq) * G
        force.setMag(strength);
        other.applyForce(force);
    }

    edges() {
        if (this.pos.x >= width - this.r) {
            this.pos.x = width - this.r;
            this.v.x *= -0.6;
        } if (this.pos.x <= this.r) {
            this.pos.x = this.r;
            this.v.x *= -0.6;
        } if (this.pos.y >= height - this.r) {
            this.pos.y = height - this.r;
            this.v.y *= -0.6;
        } if (this.pos.y <= this.r) {
            this.pos.y = this.r;
            this.v.y *= -0.6;
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
        yell.mult(1000);
        line(this.pos.x, this.pos.y, this.pos.x + yell.x, this.pos.y + yell.y);
    }
  }