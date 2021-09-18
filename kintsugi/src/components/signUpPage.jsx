import imag from '../images/login/fabian-quintero-UWQP2mh5YJI-unsplash.png';
import '../css/signin.css';
import SignUpForm from './signUpForm';

export default function SignUpPage() {
    return (
            <div class="row g-0" id="aa">
                <div class="col-sm-12 col-md-5 col-lg-7  abc">
                    <img src={imag}/>
                </div>
                <SignUpForm />
            </div>
    );
}