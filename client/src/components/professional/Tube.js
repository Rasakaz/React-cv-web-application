class Tube {
    constructor(p, x, y, w, h, Bodies, World, world) {
        this.p = p;
        
        var options = {
            isStatic: true,
            friction: 1,
            restitution: 0
        }
        this.body = Bodies.rectangle(x, y, w, h, options);

        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }




    display() {


        this.p.push();
        this.p.fill( 0, 0, 255, 0.3);
        this.p.noStroke();

        
        
        this.p.rectMode(this.p.CENTER);
       
        this.p.translate(this.body.position.x, this.body.position.y);
       

        this.p.rect(0, 0, this.w, this.h, 55, 55, 0, 0);
        this.p.pop();
    }
}

export default Tube;