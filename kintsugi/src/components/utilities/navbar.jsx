import React, { Component } from 'react';
import '../../css/navbar.css';
import artboard8 from '../../images/navbar/Artboard 8.svg';
import {Link} from "react-router-dom";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    mouseIn(event){
        event.target.style.textDecoration = "underline";
    }

    mouseOut(event){
        event.target.style.textDecoration = "none";
    }

    render() {
        return (
    <section id="n-bar">
        <nav class="navbar navbar-expand-lg nav-max">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={artboard8} alt="Kintsugi"/>
                </a>

                <div class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <div class="container ham">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </div>

                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav ">
                        <li class="nav-item nav_links">
                            <Link class="nav-link " to="/">Home</Link>
                        </li>
                        <li class="nav-item nav_links">
                            <Link class="nav-link" to="/about">About Us</Link>
                        </li>
                        <li class="nav-item nav_links">
                            <Link class="nav-link active" to="/volunteer">Volunteer</Link>
                        </li>
                        <li class="nav-item nav_links">
                            <Link class="nav-link" to="/supportgroups">Support Group</Link>
                        </li>
                        <li class="nav-item nav_links">
                            <Link class="nav-link active" to="/contact">Get In Touch</Link>
                        </li>
                        <Link class="nav_btn" to="/book" onMouseEnter={this.mouseIn} onMouseLeave={this.mouseOut}>Book Appointment</Link>
                    </ul>

                </div>
            </div>
        </nav>
    </section>
        );
    }
}