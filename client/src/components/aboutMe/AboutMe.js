import React, { Component } from 'react';
import LeftArrow from './left_arrow.png';
import RightArrow from './right_arrow.png';



class AboutMe extends Component {

    constructor() {
        super();
        this.state = {
            w: 0,
            h: 0,
            text: [
                `third year student in the software engineering department in the Sami Shamoon college located at Beer Sheva.`,
                `i'm looking for initial position to learn and develop.`,
                `i'm passionate about technology, interactive media and in the digital world i believe that bringing design, imagination and thindking to a code is essential and the unlimited way of expressing yourself.`,
                `i specializes in a variety of tools, applications and technologies.`,
                `have logical thinking and data analysis skills, autodidact with independent  and collaborations work skills.`
            ],
        }


        this.index = 0;
        this.textIndex = 0;
        this.typeSpeed = 50;
        this.timer = null;
    }


    getContent() {
        return (
            <div className='aboutMe-content'>

                <div className='aboutMeTitle'
                    data-aos="fade-up"
                    data-aos-duration="3000">

                    <h6 id='aboutMe'

                    >
                        About Me
                    </h6>
                </div>

                <div className="aboutMe-main">
                    <div className="text" style={{ transform: 'translate(0%,' + this.state.h * 0.50 + 'px)' }}>
                        <div id='aboutMe-text'>{this.state.text[this.index]}</div>
                    </div>

                    <div className='text-selector'>
                        <img id='leftArrow' src={LeftArrow} alt="leftArrow" onClick={this.leftClick} />
                        <div id='dot0' style={{ borderRadius: '50%', width: '15px', height: '15px', border: '1px solid black', backgroundColor: 'black', cursor: 'pointer' }} alt="closeDot" onClick={() => {
                            document.getElementById('dot' + this.index).style.background = 'none';
                            this.index = 0;
                            //document.getElementById('aboutMe-text').textContent = this.state.text[this.index];

                            document.getElementById('aboutMe-text').textContent = "";
                            this.textIndex = 0;
                            clearTimeout(this.timer);
                            this.typing();
                            document.getElementById('dot' + this.index).style.background = 'black';
                        }} >
                        </div>

                        <div id='dot1' style={{ borderRadius: '50%', width: '15px', height: '15px', border: '1px solid black ', cursor: 'pointer'}} alt="openDot" onClick={() => {
                            document.getElementById('dot' + this.index).style.background = 'none';
                            this.index = 1;
                            //document.getElementById('aboutMe-text').textContent = this.state.text[this.index];
                            document.getElementById('aboutMe-text').textContent = "";

                            this.textIndex = 0;
                            clearTimeout(this.timer);
                            this.typing();
                            document.getElementById('dot' + this.index).style.background = 'black';
                        }}>
                        </div>

                        <div id='dot2' style={{ borderRadius: '50%', width: '15px', height: '15px', border: '1px solid black', cursor: 'pointer' }} alt="openDot" onClick={() => {
                            document.getElementById('dot' + this.index).style.background = 'none';
                            this.index = 2;
                            //document.getElementById('aboutMe-text').textContent = this.state.text[this.index];

                            document.getElementById('aboutMe-text').textContent = "";
                            this.textIndex = 0;
                            clearTimeout(this.timer);
                            this.typing();
                            document.getElementById('dot' + this.index).style.background = 'black';
                        }} >
                        </div>
                        <div id='dot3' style={{ borderRadius: '50%', width: '15px', height: '15px', border: '1px solid black', cursor: 'pointer' }} alt="openDot" onClick={() => {
                            document.getElementById('dot' + this.index).style.background = 'none';
                            this.index = 3;
                            //document.getElementById('aboutMe-text').textContent = this.state.text[this.index];

                            document.getElementById('aboutMe-text').textContent = "";
                            this.textIndex = 0;
                            clearTimeout(this.timer);
                            this.typing();
                            document.getElementById('dot' + this.index).style.background = 'black';
                        }} >
                        </div>
                        <div id='dot4' style={{ borderRadius: '50%', width: '15px', height: '15px', border: '1px solid black', cursor: 'pointer' }} alt="openDot" onClick={() => {
                            document.getElementById('dot' + this.index).style.background = 'none';
                            this.index = 4;
                            //document.getElementById('aboutMe-text').textContent = this.state.text[this.index];

                            document.getElementById('aboutMe-text').textContent = "";
                            this.textIndex = 0;
                            clearTimeout(this.timer);
                            this.typing();
                            document.getElementById('dot' + this.index).style.background = 'black';
                        }}>
                        </div>
                        <img id='rightArrow' src={RightArrow} alt="leftArrow" onClick={this.rightClick} />
                    </div>
                </div>

            </div>
        );
    }


    rightClick = () => {
        document.getElementById('dot' + this.index).style.background = 'none';
        if (this.index === 4)
            this.index = 0;
        else this.index++;


        document.getElementById('aboutMe-text').textContent = "";
        this.textIndex = 0;
        clearTimeout(this.timer);
        this.typing();
        document.getElementById('dot' + this.index).style.background = 'black';
    }


    leftClick = () => {
        document.getElementById('dot' + this.index).style.background = 'none';
        if (this.index === 0)
            this.index = 4;
        else this.index--;

        document.getElementById('aboutMe-text').textContent = "";
        this.textIndex = 0;
        clearTimeout(this.timer);
        this.typing();
        document.getElementById('dot' + this.index).style.background = 'black';
    }

    typing = () => {

        if (this.textIndex < this.state.text[this.index].length) {
            document.getElementById('aboutMe-text').textContent += this.state.text[this.index].charAt(this.textIndex);
            this.textIndex++;
            this.timer = setTimeout(this.typing, 50);
        }



    }

    componentDidMount() {
        // document.getElementById('3dot').style.backgroundColor = "rgb(255, 255, 255)";
        this.setState({
            w: window.innerWidth,
            h: window.innerHeight
        });
    }

    componentWillUnmount() {
        // document.getElementById('3dot').style.backgroundColor = "";
        if (this.timer)
            clearTimeout(this.timer);
    }


    render() {

        return (
            <div className='AboutMePage' ref='professional' >
                {this.getContent()}
            </div>
        );
    }
}



export default AboutMe;
