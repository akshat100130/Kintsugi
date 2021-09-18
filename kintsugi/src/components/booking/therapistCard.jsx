import React, { Component } from 'react';
import '../../css/therapist.css';
import doc from '../../images/bookAnAppointment/doctor.png';
import brief from '../../images/bookAnAppointment/briefcase.svg';
import mon from '../../images/bookAnAppointment/money.svg';
import loc from '../../images/bookAnAppointment/location.svg';
import {Link} from "react-router-dom";

export default class TherapistCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div class="card h-100" style={{width: "90%", margin: "0 auto"}}>
                    <img src={doc} class="card-img-top" alt="Doctor Image"/>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-8">
                                <h5 class="card-title">Dr. ABC Person</h5>
                            </div>
                            <div class="col-4" style={{textAlign: "right"}}>
                                <p class="doc_rating">4.8 <span style={{fontSize: "20px"}}>&#9733;</span></p>
                            </div>
                        </div>

                        <p class="doc_spe">Principal Psychotherapist | Clinical Lead Supervisor | Lecturer</p>
                        
                        <div class="row doc_detail">
                            <div class="col-7">
                                <p><img src={brief} alt="Experience"/>Experience</p>
                            </div>
                            <div class="col-5" style={{textAlign: "right"}}>
                                <p>7Years</p>
                            </div>
                            <div class="col-6">
                                <p><img src={mon} alt="Cost"/>Cost</p>
                            </div>
                            <div class="col-6" style={{textAlign: "right"}}>
                                <p>Rs.1000/hour</p>
                            </div>
                            <div class="col-7">
                                <p><img src={loc} alt="Location"/>Location</p>
                            </div>
                            <div class="col-5" style={{textAlign: "right"}}>
                                <p>Delhi</p>
                            </div>
                            <div class="col-12" style={{textAlign: "right"}}>
                                <Link class="btn btn-primary" to="/confirmation">Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}