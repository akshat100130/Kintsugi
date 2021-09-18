import artboard7 from '../images/resources/Artboard 7.png';
import {Link} from "react-router-dom";
import {Auth} from 'aws-amplify';
import '../css/signin.css';
import { useHistory } from "react-router-dom";

export default function SignUpForm() {

    const history = useHistory();

    async function signUp(){
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("pwd").value;
        try {
            await Auth.signUp({
              username: username,
              password: password,
              attributes: {
                email: email,
                birthdate: "00/00/0000",
                name: "Jane Doe"
              },
            });
            alert("Verification Email Sent")
            history.push("/signup");
          } catch (error) {
            alert(error.message)
          }
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
                                <div class="login-form-group">
                                    <label for="username">Username <span class="required-star">*</span></label>
                                    <input type="text" placeholder="Username" id="username" required/>
                                </div>
                                <div class="login-form-group">
                                    <label for="pwd">Password <span class="required-star">*</span></label>
                                    <input autocomplete="off" type="password" placeholder="Password" id="pwd" required/>
                                </div>
                                <button href="#" class="rounded-button login-cta" onClick={signUp}>Create Account</button>
                                <div class="register-div">Already Have an account? <Link to="/signin" class="link create-account -link">Sign In?</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}