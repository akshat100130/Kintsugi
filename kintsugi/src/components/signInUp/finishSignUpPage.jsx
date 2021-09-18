import imag from '../../images/login/fabian-quintero-UWQP2mh5YJI-unsplash.png';
import '../../css/signin.css';
import FinishSignUpForm from './finishSignUpForm';

export default function FinishSignUpPage(props) {
    return (
            <div class="row g-0" id="aa">
                <div class="col-sm-12 col-md-5 col-lg-7  abc">
                    <img src={imag}/>
                </div>
                <FinishSignUpForm user={props.user} updateUser={props.updateUser}/>
            </div>
    );
}