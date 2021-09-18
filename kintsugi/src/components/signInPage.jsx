import imag from '../images/login/fabian-quintero-UWQP2mh5YJI-unsplash.png';
import '../css/signin.css';
import SignInForm from './signInForm';

export default function SignInPage() {    
    return (
            <div class="row g-0" id="aa">
                <div class="col-sm-12 col-md-5 col-lg-7  abc">
                    <img src={imag}/>
                </div>
                <SignInForm />
            </div>
    );
}