import React, { Component } from 'react';
import '../../css/volunteer.css';

export default class VolunteerForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="volunteerform">
                <div class="container col-sm-12 col-md-12 col-lg-12 " >
                    <div class="main_heading ">
                        <h1>Volunteer with Us!</h1>
                    </div>
                    <form class="formstuff col-sm-10 col-md-10 col-lg-5 ">
                    <div class="form-group">
                        <input type="text" class="form-control " id="formGroupExampleInput" placeholder="Name"/>
                    </div>
                    <div class="form-group">
                        <input type="tell" class="form-control" id="formGroupExampleInput2" placeholder="+91 0000000000"/>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="staticEmail" placeholder="example@provider.com"/>
                    </div>
                    <input type="submit" class="form_ka_btn"/>
              </form>
              
            </div>
        </section>
        );
    }
}