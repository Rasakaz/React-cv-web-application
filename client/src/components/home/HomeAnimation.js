import React, { Component } from 'react';
import p5 from 'p5';
import FallingObject from './FallingObject';
import Container from './Container';


class HomeAnimation extends Component {

    constructor() {
        super();
        this.myp5 = null;
        this.state = {
            w: 0,
            h: 0
        }
        this.renderRef = React.createRef();
    }

    componentDidMount() {


        this.setState({
            w: window.innerWidth,
            h: window.innerHeight
        });

        this.sketch = (p) => {

            let container;
            let images = [];
               
            p.preload = () => {               
                for (let i = 1; i <= 16; i++) {
                    images.push(p.loadImage('./Pictures/' +i+'.png'));
                }
            }

            p.setup = () => {
                //  console.log('animation. setup');
                p.createCanvas(this.props.w, this.props.h).parent(this.renderRef.current); //parent is the target where the canvas will be drwan, and its get a querySelector(such as the id props of the div)
    
                container = new Container(p);
            }

            p.draw = () => {
                //  console.log('animation. draw');
                // console.log('1');
                p.clear();

                // p.image(img1, 0, 0);
                if (p.frameCount % 2 === 0 && container.shapes.length < 150) { // give a maximum number of object that fall
                    container.add(new FallingObject(p, images[p.floor(p.random(0, 16))]));

                    //container.add(new FallingObject(p, images[16]));
                }

                container.display();

                container.clearOffscreen();
            }

            p.windowResized =  () => {
                p.resizeCanvas(window.innerWidth, window.innerHeight, p.P2D);
            }
        }

        this.myp5 = new p5(this.sketch);
        
        //console.log('animation. componentEnd');
    }

    componentWillUnmount() {
        //console.log('animation. componentWillUnmount');
        this.myp5.noLoop();
        //console.log(myp5);
        // console.log(' 1 no loop');
    }

    render() {
        // console.log('animation. render');
        const divStyle = {
            width: "100%",
            height: "100%"
        };

        

        return (
            <div ref={this.renderRef} className="animation" style={divStyle} >

            </div>

        );
    }

}

export default HomeAnimation;
