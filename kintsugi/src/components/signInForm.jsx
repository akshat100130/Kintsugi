import artboard7 from '../images/resources/Artboard 7.png';
import {Link} from "react-router-dom";
import '../css/signin.css';
import {Auth} from 'aws-amplify';
import { useHistory } from "react-router-dom";

export default function SignInForm() {
    
    const history = useHistory();

    async function login(){
        const email = document.getElementById("email").value;
        const password = document.getElementById("pwd").value;
        try {
            await Auth.signIn(email, password);
            alert("Success!")
            history.push("/");
        } catch (error) {
            alert(error.message)
        }
    }
        
    return (<div class="col-sm-12 col-md-7 col-lg-5">
                    <div class="login-container">
                        <div class="login-form">
                            <div class="login-form-inner">
                                <div class="logo"><img src={artboard7}/></div>
                                <h1>Login</h1>
                                <p class="body-text">Sign In to Kintsugi</p>
                                <br/>
                                <div class="login-form-group">
                                    <label for="email">Email <span class="required-star">*</span></label>
                                    <input type="email" placeholder="example@provided.com" id="email" required/>
                                </div>
                                <br/>
                                <div class="login-form-group">
                                    <label for="pwd">Password <span class="required-star">*</span></label>
                                    <input autocomplete="off" type="password" placeholder="Password" id="pwd" required/>
                                </div>

                                <div class="login-form-group single-row">
                                    <div class="custom-check">
                                    <input autocomplete="off" type="checkbox" checked id="remember"/><label for="remember">Remember me</label>
                                </div>
              
                                <a href="#" class="link forgot-link">Forgot Password?</a>
                            </div>
                    
                    <button class="rounded-button login-cta" onClick={login}>Login</button>
              
                    <div class="register-div">Not registered yet? <Link to="/signup" class="link create-account-link">Create an account.</Link></div>
                  </div>
                </div>
            </div>
        </div>
    );
}