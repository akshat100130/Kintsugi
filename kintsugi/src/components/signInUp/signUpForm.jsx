import artboard7 from '../../images/resources/Artboard 7.png';
import {Link} from "react-router-dom";
import '../../css/signin.css';
import { useHistory } from "react-router-dom";
import { signUp } from '../../firebase/functions';

export default function SignUpForm() {

    const history = useHistory();

    async function createAccount(){
        const email = document.getElementById("email").value;
        signUp({email:email}).then(res => {
            if (res){
                alert("Verification email sent!");
                history.push('/');
            }
        });
    }
        
    return (<div class="col-sm-12 col-md-7 col-lg-5">
                    <div class="login-container">
                        <div class="login-form">
                            <div class="login-form-inner">
                                <div class="logo"><img src={artboard7}/></div>
                                <h1>Sign Up</h1>
                                <br/>
                                <div class="login-form-group">
                                    <label for="email">Email <span class="required-star">*</span></label>
                                    <input type="email" placeholder="example@provider.com" id="email" required />
                                </div>
                                <button href="#" class="rounded-button login-cta" onClick={createAccount}>Create Account</button>
                                <div class="register-div">Already Have an account? <Link to="/signin" class="link create-account -link">Sign In?</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}