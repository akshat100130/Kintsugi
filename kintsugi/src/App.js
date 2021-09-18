import React, { Component } from 'react';
import UserScreen from './components/userScreen.jsx';
import NonUserScreen from './components/nonUserScreen.jsx';
import fire from './firebase/config.js';
import {createProfile} from './firebase/functions.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {user: null, type: 'landing'};
        this.authListener = this.authListener.bind(this);
        this.createProfile = this.createProfile.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    createProfile(){
        createProfile().then(res=>{
            if (res) {
                window.location.href = window.location.href.substring(0, window.location.href.indexOf("/", 9))
                this.setState({user: res, type: 'user'})
            } else {
                window.location.href = window.location.href.substring(0, window.location.href.indexOf("/", 9))
                this.setState({user: null, type: 'landing'});
            }
        })
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                if (fire.auth().isSignInWithEmailLink(window.location.href)){
                    this.setState({user: user, type: 'verification'}, this.createProfile);
                } else this.setState({user: user, type: 'user'})
            } else {
                if (fire.auth().isSignInWithEmailLink(window.location.href)){
                    window.location.href = window.location.href.substring(0, window.location.href.indexOf("/", 9))
                }
                this.setState({user: null, type: 'landing'});
            }
        });
    }

    render() {
        if (this.state.type=='landing'){
            return <NonUserScreen />
        } else if (this.state.type=='user'){
            return (this.state.user.emailVerified) ? <UserScreen /> : <NonUserScreen />
        } else if (this.state.type=='verification'){
            return <div style={{width: "100vw",
                                height: "100vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontFamily: "Zilla Slab",
                                fontColor: "black",
                                fontWeight: "600px",
                                fontSize: "70px",
                                background: "#F48D8D"}}>Verifying...</div>
        }
    }
}
export default App;