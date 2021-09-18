import artboard7 from '../../images/resources/Artboard 7.png';
import '../../css/signin.css';
import fire from '../../firebase/config';

export default function FinishSignUpForm(props) {
    const userdb = props.user;
    const updateUser = props.updateUser;

    function finishSignUp() {
        const pass = String(document.getElementById("pwd").value)
        const cfm = String(document.getElementById("cfmpwd").value)
        const fullname = String(document.getElementById("name").value)
        const username = String(document.getElementById("username").value)
        if (cfm !== pass) {
            alert("Passwords do not match!");
            return;
        }
        const user = fire.auth().currentUser
        return user.updatePassword(pass).then(() => {
            userdb.fullname = fullname
            userdb.username = username
            userdb.firstTime = false
            updateUser(userdb)
            console.log("signed up")
        }).catch((error)=>{
            console.log(error)
            alert("Verification timed out. Try signing up again.")
        })
    }
        
    return (<div class="col-sm-12 col-md-7 col-lg-5">
                    <div class="login-container">
                        <div class="login-form">
                            <div class="login-form-inner">
                                <div class="logo"><img src={artboard7}/></div>
                                <h1>Sign Up</h1>
                                <br/>
                                <div class="login-form-group">
                                    <label for="name">Name <span class="required-star">*</span></label>
                                    <input type="text" placeholder="Name" id="name" required />
                                </div>
                                <div class="login-form-group">
                                    <label for="username">Username <span class="required-star">*</span></label>
                                    <input type="text" placeholder="Username" id="username" required />
                                </div>
                                <div class="login-form-group">
                                    <label for="password">Password <span class="required-star">*</span></label>
                                    <input type="password" placeholder="Password" id="pwd" required />
                                </div>
                                <div class="login-form-group">
                                    <label for="confirm">Confirm <span class="required-star">*</span></label>
                                    <input type="password" placeholder="Confirm Password" id="cfmpwd" required />
                                </div>
                                <button href="#" class="rounded-button login-cta" onClick={finishSignUp}>Finish Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
    );
}