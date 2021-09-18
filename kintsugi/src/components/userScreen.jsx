import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BookAppointment from './booking/bookingPage';
import Home from './home/homePage';
import Confirmation from './booking/confirmationPage';
import Contact from './contact/contactPage';
import Support from './supportGroup/supportGroupPage';
import Volunteer from './volunteer/volunteerPage';
import FinishSignUpPage from './signInUp/finishSignUpPage';
import fire from '../firebase/config.js';
import {getCurrentUserInfo, setCurrentUserInfo} from '../firebase/functions.js';

export default class UserScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {user: null}
        this.setUser = this.setUser.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    componentDidMount(){
        this.setUser()
    }

    logOut() {
        if (window.confirm("Are you sure you want to log out?")) {
            fire.auth().signOut();
        }
    }

    setUser(){
        getCurrentUserInfo().then(res=>{
            this.setState({user: res})
        })
    }

    updateUser(obj) {
        setCurrentUserInfo(obj).then((res) => this.setUser()).catch((err) => alert("Details couldn't be updated!"))
    }

  render(){
    if (this.state.user==null){
        return <div style={userScreenStyle.loadingDiv}>Signing In...</div>
    } else if (this.state.user.firstTime) {
        return <FinishSignUpPage user={this.state.user} updateUser={this.updateUser}/>
    }
    return (
          <div className="App">
            <Router>
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/volunteer">
                  <Volunteer />
                </Route>
                <Route path="/supportgroups">
                  <Support />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/confirmation">
                  <Confirmation />
                </Route>
                <Route path="/book">
                  <BookAppointment />
                </Route>
                <Route path="/about">
                    <Home />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </Router>
          </div>
        );
    }
}

const userScreenStyle = {
    loadingDiv: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Zilla Slab",
        fontColor: "black",
        fontWeight: "600px",
        fontSize: "70px",
        background: "#F48D8D"
    }
}