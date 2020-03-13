/*
    this function is randomize a number for the size of the shape
*/
function randomizeSize(p) {
    let r = p.pow(p.random(0, 1), 2); // get a random r size between 0.5 to 1,then power it 
    return p.constrain(r * 64, 10, 36); //elnlarge r then constrain the size between 3 to 64
}

class FallingObject {

    constructor(p, image) {
        this.p = p;
        // let x = p.random(-p.windowWidth / 2, p.windowWidth / 2);
        // let y = p.random(-p.windowHeight * 0.7, - p.windowHeight * 0.6); // create the object up from the window to give the falling effect

        let x = p.random(0, p.windowWidth);
        let y = p.random(-100, -64);

        this.image = image;

        this.pos = p.createVector(x, y); //posistion vector
        this.vel = p.createVector(0, 0); //velocity vector
        this.acc = p.createVector(); //acceleration vector

        this.angle = p.random(0, p.TWO_PI);
        //this.dir = (this.p.random(-0.5, 0.5) > 0.5) ? 0.5 : -0.5;
        this.dir = this.p.random(-0.5, 0.5);

        this.r = randomizeSize(this.p);

    }

    offScreen() {
        return (this.pos.y > this.p.windowHeight);
    }

    display() {

        this.p.push(); //save the current state of drawing, then the each specific instance can have differente drawing states

        this.p.translate(this.pos.x, this.pos.y);
        //this.p.rotate(this.angle);
        this.p.imageMode(this.p.CENTER);

        //this.p.image(this.image, this.pos.x, this.pos.y, this.r, this.r);
        this.p.image(this.image, 0, 0, this.r, this.r);

        this.p.pop(); //pop the current state 
    }

    /*
        function that appliyng a force that comes from outside on the object
    */
    applyForce(force) {
        let f = force.copy();
        f.mult(this.r); //multiply the force vector by the object size(radius) because the force is effect on the object by its mass
        this.acc.add(f);
        this.acc.limit(0.9);
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.r * 0.5); //limit the velocity of the object by its size
        this.pos.add(this.vel);
        this.acc.mult(0);

        //this.angle += this.dir * this.vel.mag() / 200;
    }

}



export default FallingObject;