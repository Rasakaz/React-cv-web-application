class Container {

    constructor(p){
        this.p = p;
        this.shapes = [];
        this.gravity = p.createVector(0, 0.0003);
    }


    clearOffscreen(){
        for(let i = this.shapes.length - 1; i >= 0; i--){
            if(this.shapes[i].offScreen()){
                this.shapes.splice(i, 1); 
            }
        }
    }

    add(obj) {
        this.shapes.push(obj);
    }

    display(){
    
        for (let i = 0; i < this.shapes.length; i++) {
            this.shapes[i].applyForce(this.gravity);
            this.shapes[i].update();
            this.shapes[i].display();
        }
    }

}

export default Container;