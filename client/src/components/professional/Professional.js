import React, { Component } from 'react';
import ProfessionalAnimation from './ProfessionalAnimation';


class Professional extends Component {

    constructor() {
        super();

        this.state = {
            w: 0,
            h: 0,
        }
    }

    getTitle() {
        return (
            <div className="professional-title"
            data-aos="fade-up"
            data-aos-duration="3000"
            >
                <h6>Professional</h6>
            </div>
        )
    }

    getProfessionals() {
        return (
            <div className = "professionals-lang" >

                <div className ='lang-title'><h6 >Asmbly</h6></div>
                <div className ='lang-title'><h6>C/C++</h6></div>
                <div className ='lang-title'><h6>Java</h6></div>
                <div className ='lang-title'><h6>Python</h6></div>
                <div className ='lang-title'><h6>Html, CSS, JS, Reactjs</h6></div>
                <div className ='lang-title'><h6>API's</h6></div>
            </div>

        );
    }

    componentDidMount() {
        this.setState({
            w: this.refs.professional.clientWidth,
            h: this.refs.professional.clientHeight
        });
    }

    componentWillUnmount(){
        // document.getElementById('2dot').style.backgroundColor = "";
    }

    render() {


        return (
            <div className='professional' ref='professional' 
            >
                {this.getTitle()}
                <ProfessionalAnimation
                    data-aos="zoom-out"
                    data-aos-duration= "5000"
                    className='professional-animation'
                    w={this.state.w}
                    h={this.state.h}
                />
                {this.getProfessionals()}

            </div>
        );
    }
}



export default Professional;
