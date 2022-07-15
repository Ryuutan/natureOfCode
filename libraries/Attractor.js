class Attractor {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.v = createVector();
        this.mass = m;
        this.r = sqrt(this.mass);
    }

    attract(atd) {
        let force = p5.Vector.sub(this.pos, atd.pos);
        let distanceSq = force.magSq();
        let strength = ((this.mass * atd.mass) / distanceSq) * G
        force.setMag(strength);
        atd.applyForce(force);
    }

    solid() {
        this.v.set(0, 0);
    }

    show() {
        strokeWeight(1);
        stroke(255);
        fill(255, 255, 255, 50);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
    }
}