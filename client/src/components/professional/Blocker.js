class Blocker {

    constructor(p, x, y, w, h, Bodies, World, world, angle) {
        

        this.angle = angle;
        this.options = {
            isStatic: true,
            friction: 0,
            restitution: 0.5,
            density: 1,
            angle: this.angle
        }

        x += p.random(-1, 1);
        this.w = w;
        this.h = h;
        this.p = p;
        
        this.r = 18;
        
        
        this.body =  Bodies.rectangle(x, y, w - 10,  h, this.options);
        this.Bodies = Bodies;
        
        
       
        World.add(world, this.body);
    }


    display() {
        this.p.push();
        this.p.fill(0, 0, 255, 0.3);
        
        this.p.noStroke();
        //this.p.strokeWeight(2);        
        let pos = this.body.position;

        this.p.translate(pos.x, pos.y);
        
        //this.p.ellipse(0, 0, this.r * 2);
        this.p.rectMode(this.p.CENTER);
        this.p.rotate(this.angle);
        switch(this.angle){
            case Math.PI / 40:
                this.p.rect(0, 0, this.w, this.h, 0, 55, 55, 0);
                break;

            case Math.PI / - 40:
                this.p.rect(0, 0, this.w, this.h, 55, 0, 0, 55);
                break;

            default: 
                this.p.rect(0, 0, this.w, this.h, 55, 55, 55, 55);
                break;
        }


        //this.p.rect(0, 0, this.r, this.r);
        
        this.p.pop();
    }


}

export default Blocker;