import React, { Component } from 'react';
import '../../css/footer.css';
import logo from '../../images/footer/footer_logo.svg';
import twitter from '../../images/footer/footer_twitter.svg';
import insta from '../../images/footer/footer_insta.svg';
import fb from '../../images/footer/footer_facebook.svg';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <section id="footer">
            <div class="container" style={{marginBottom: "2em"}}>
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <img src={logo} alt=""/>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 footer_links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Book Appointment</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Get In Touch</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 footer_links">
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 f_copy">
                        <p>Copyright Kintsugi LLC @ 2021</p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 f_social">
                        <a href="#"><img src={twitter} alt=""/></a>
                        <a href="#"><img src={insta} alt=""/></a>
                        <a href="#"><img src={fb} alt=""/></a>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}