import React, { Component } from 'react';
import '../css/sectionOne.css';
import psych from '../images/sections/psychologist-animate.svg'

export default class SectionOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.flipped){
            return (
            <section id="mkc2">
                <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 right-ka-dabba">
                        <img src={psych} alt=""/>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 left-ka-dabba">
                        <h1>{this.props.heading}</h1>
                        <p>{this.props.text}</p>
                        <div class="baap_ka_button"><button>{this.props.button}</button></div>
                    </div>
                </div>
                </div>
            </section>
            );
        }
        return (
            <section id="mkc1">
                <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 left-ka-dabba">
                        <h1>{this.props.heading}</h1>
                        <p>{this.props.text}</p>
                        <div class="baap_ka_button"><button>{this.props.button}</button></div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 right-ka-dabba">
                        <img src={psych} alt=""/>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}