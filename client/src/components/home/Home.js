import '../../App.css';
import React, { Component } from 'react';
import HomeAnimation from './HomeAnimation';


// import HomePic from '../pictures/HomePic.jpg;

const getMyName = () => {
    return (
        <div className="myName"
            data-aos="fade-up"
            data-aos-duration="3000">

            <div className='IM'>
                <h4>I</h4>
                <h4 id='tip'>'</h4>
                <h4>M</h4>
            </div>
            <div className="NIV">
                <h4>NIV</h4>
            </div>
            <div className='AZENKOT'>
                <h4>AZENKOT.</h4>
            </div>
            
            <div className="aboutMe"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="3000"
            >
                <h4>Software engineering student</h4>
            </div>
        </div>
    );
}



class Home extends Component {

    constructor() {
        super();

        this.state = {
            w: 0,
            h: 0
        }
    }

    componentDidMount() {
        this.setState({
            w: this.refs.home.clientWidth,
            h: this.refs.home.clientHeight,
        });
    }

    render() {

        return (

            <div className="Home" ref="home">
                {/* <img id = "homePic" src = {HomePic} alt="homepic" width={"20%"} height={"100%"}/> */}
                {getMyName()}
                <HomeAnimation
                    className="animation"

                    w={this.state.w}
                    h={this.state.h}
                    myp5 = {this.props.myp5}
                />
            </div>
        );
    }
}


export default Home;

