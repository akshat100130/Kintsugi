import { Component } from 'react';
import '../../css/confirmation.css';

export default class ConfirmationBanner extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <section id="confirmation">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12 left-ka-dabba">
                            <h1>We'll get back to you shortly!</h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}