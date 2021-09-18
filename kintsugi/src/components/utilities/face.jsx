import React, { Component } from 'react';
import '../../css/face.css';
import twitter from '../../images/face/iconmonstr-twitter-4.svg';
import insta from '../../images/face/iconmonstr-instagram-14.svg';
import fb from '../../images/face/iconmonstr-facebook-4.svg';
import caret from '../../images/face/caret.svg';

export default class Face extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps){
        if (prevProps.notDefault != this.props.notDefault) this.forceUpdate();
    }

    render() {
        if (this.props.notDefault){
            return (
                <section id="face2">
                <div class="cont">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
        
                <div class="caret">
                    <img src={caret} alt=""/>
                </div>
            </section>
            );
        }
        return (
        <section id="face">
            <div class="cont">
                <h1>KINTSUGI</h1>
                <p>Healing | Building | Strenghtening</p>
                <div class="container">
                    <div class="row face_row">
                        <div class="col b_group"><button role="button" type="submit">JOIN GROUP</button></div>
                        <div class="col b_therapist"><button type="button">FIND THERAPIST</button></div>
                    </div>
                </div>
                <div class="icon_row">
                    <a href="#" class="icon_svg"><img src={twitter} alt=""/></a>
                    <a href="#" class="icon_svg"><img src={insta} alt=""/></a>
                    <a href="#" class="icon_svg"><img src={fb} alt=""/></a>
                </div>
            </div>
        </section>
        );
    }
}