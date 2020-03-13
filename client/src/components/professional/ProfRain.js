class ProfRain {
    constructor(p, x, y, Bodies, World, world, image) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            dentisy: 1
        }

        this.p = p;
        this.r = 40;

        // let r_ = p.pow(p.random(0, 1), 2);
        // this.r = p.constrain(r_ * 72, 26, 100); 
        
        this.body = Bodies.circle(x, y, this.r - 20, options);
        
        World.add(world, this.body);
        this.image = image;
    }

    display() {
        this.p.push();
        this.p.noFill();
        
        this.p.stroke(0);
        
        let pos = this.body.position;

        this.p.translate(pos.x, pos.y);
        
        this.p.imageMode(this.p.CENTER);

        this.p.image(this.image, 0, 0, this.r, this.r);
        

        this.p.pop();
    }

}

export default ProfRain;