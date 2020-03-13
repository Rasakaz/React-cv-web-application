import React, { Component } from 'react';
import p5 from 'p5';
import Matter from 'matter-js';
import Blocker from './Blocker';
import ProfRain from './ProfRain';
import Tube from './Tube';

var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

class professionalAnimation extends Component {


    constructor() {
        super();

        this.myp5 = null;
        this.state = {
            w: 0,
            h: 0,
        }
        this.renderRef = React.createRef();
    

    }

    componentDidMount() {
        //console.log('p.a componenetDidMount');

        this.setState({
            w: window.innerWidth,
            h: window.innerHeight
        });

        this.sketch = (p) => {
            var engine;
            var world;
            var Blockers = [];
            var Falls = [];
            var tubes = [];
  
            var spacing = window.innerWidth / 10;

            let images = [];

            p.preload = () => {
                for (let i = 1; i <= 16; i++) {
                    images.push(p.loadImage('./Pictures/' + i + '.png'));
                }
            }
                //Blocker(p, x, y, w, h, Bodies, World, world, angle)
                //Tube(p, x, y, w, h, Bodies, World, world)
            p.createWorld = () => {
                
                //Blockers
                //left side
                Blockers.push(new Blocker(p, 0, spacing * 0.8, spacing, 10, Bodies, World, world, Math.PI / 13));
                Blockers.push(new Blocker(p, window.innerWidth * 0.225, window.innerHeight * 0.2, spacing * 0.2, 10, Bodies, World, world, 0));
                Blockers.push(new Blocker(p, window.innerWidth * 0.08, window.innerHeight * 0.5, spacing * 0.6, 10, Bodies, World, world, Math.PI / 16));
                Blockers.push(new Blocker(p, window.innerWidth * 0.15, window.innerHeight * 0.325, spacing * 0.6, 10, Bodies, World, world, Math.PI / 19));
                Blockers.push(new Blocker(p, window.innerWidth * 0.3, window.innerHeight * 0.35, spacing * 0.3, 10, Bodies, World, world,Math.PI / 15));
                
                //right side
                // Blockers.push(new Blocker(p, window.innerWidth + spacing - 50, spacing + 5, window.innerWidth + spacing, 20, Bodies, World, world, Math.PI / -40));
                Blockers.push(new Blocker(p, window.innerWidth * 0.925, spacing * 0.8, spacing * 0.5, 10, Bodies, World, world, -Math.PI / 13));
                Blockers.push(new Blocker(p, window.innerWidth * 0.8, spacing * 0.8, spacing * 0.5, 10, Bodies, World, world, -Math.PI / 16));
                Blockers.push(new Blocker(p, window.innerWidth * 0.98, window.innerHeight * 0.3, spacing * 0.5, 10, Bodies, World, world, -Math.PI / 18));
                Blockers.push(new Blocker(p, window.innerWidth * 0.85, window.innerHeight * 0.3, spacing * 0.5, 10, Bodies, World, world, -Math.PI / 18));
                Blockers.push(new Blocker(p, window.innerWidth * 0.9, window.innerHeight * 0.5, spacing * 0.5, 10, Bodies, World, world, -Math.PI / 7));
                Blockers.push(new Blocker(p, window.innerWidth * 0.75, window.innerHeight * 0.45, spacing * 0.5, 10, Bodies, World, world, -Math.PI / 18));
                Blockers.push(new Blocker(p, window.innerWidth * 0.65, window.innerHeight * 0.3, spacing * 0.5, 10, Bodies, World, world, -Math.PI / 8));

                //tubes

               //bottom tube
               var width = 7 * window.innerWidth * 0.005 + 554;
               tubes.push(new Tube(p, window.innerWidth * 0.42, window.innerHeight * 0.89, width, 5, Bodies, World, world));

               for(let i = 0; i < 7; i++){
                    let w = 5;
                    let h = window.innerHeight * 0.35;
                    let y = window.innerHeight * 0.9 - h /1.9;
                    let tubeSpacing = 100;
                    let x = i * tubeSpacing + window.innerWidth * 0.225;
                    tubes.push(new Tube(p, x, y , w, h, Bodies, World, world));
                }
            }
            
            p.resetWorld = () => {

                // console.log('BEFORE: ', world);

                World.remove(world, Blockers[0]);
                Blockers[0] = new Blocker(p, 0, spacing / 2, p.windowWidth / 2, 20, Bodies, World, world, Math.PI / 40);
                
                World.remove(world, Blockers[1]);
                Blockers[1] = new Blocker(p, p.windowWidth + spacing - 50, spacing + 5, p.windowWidth + spacing, 20, Bodies, World, world, Math.PI / -40);
         
                //bottom tube
                World.remove(world, tubes[0]);
                tubes[0] = new Tube(p, 300 + window.innerWidth * 0.225,  window.innerHeight * 0.85, 7 * window.innerWidth * 0.005 + 550, 5, Bodies, World, world);

                // console.log('AFTER: ', world);
               


                for(let i = 0; i < 7; i++){
                    let w = window.innerWidth * 0.005;
                    let h = window.innerHeight * 0.35;
                    let y =  window.innerHeight * 0.68;
                    let tubeSpacing = 100;
                    let x = i * tubeSpacing + p.windowWidth * 0.225;

                    tubes[i + 1] = new Tube(p, x, y, w, h, Bodies, World, world);
                }
            }

            p.setup = () => {
                p.createCanvas(this.props.w, this.props.h, p.P2D).parent(this.renderRef.current); //parent is the target where the canvas will be drwan, and its get a querySelector(such as the id props of the div)
                console.log(this.props.h);
                engine = Engine.create();
                world = engine.world;
                world.gravity.y = 0.5;


                p.colorMode(p.HSB);

                p.createWorld();
            }

            p.draw = () => {
                
                if(p.frameCount  > 30) {
                    p.clear();
                    Engine.update(engine);
                       
        
                    for (let i = 0; i < Blockers.length; i++) {
                        Blockers[i].display();
                    }
    
                    
                    for(let i = Falls.length - 1; i >= 0; i-- ){
                        Falls[i].display();
                        if(Falls[i].body.position.y > p.windowHeight){
                            World.remove(world, Falls[i].body); // remove the fall from the World data of the matter.js
                            Falls.splice(i, 1); //remove from my data of all the Falls
                        }
                    }
    
                    for(let i = 0; i < tubes.length; i++){
                        tubes[i].display();
                    }
    
                    if(Falls.length < 100){
                        Falls.push(new ProfRain(p, 
                            (p.random(0, 1) > 0.5) ? p.random(0, window.innerWidth * 0.3)  : p.random(p.windowWidth * 0.6, p.windowWidth),
                                -50, Bodies, World, world, images[p.floor(p.random(0, 16))]));
                    }
    
                }
            }

            p.windowResized = () => {
                p.resizeCanvas(window.innerWidth, window.innerHeight, p.P2D);
                p.resetWorld();
                
            }
        }

        this.myp5 = new p5(this.sketch);
    }

    componentWillUnmount(){
        this.myp5.noLoop();
    }


    render() {
        return (
            <div ref={this.renderRef} className="animation">

            </div>

        );
    }

}

export default professionalAnimation;
