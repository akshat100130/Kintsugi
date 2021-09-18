import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BookAppointment from './booking/bookingPage';
import Home from './home/homePage';
import Confirmation from './booking/confirmationPage';
import Contact from './contact/contactPage';
import Support from './supportGroup/supportGroupPage';
import Volunteer from './volunteer/volunteerPage';
import SignInPage from './signInUp/signInPage';
import SignUpPage from './signInUp/signUpPage';

export default function NonUserScreen(){
  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
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
            <SignInPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}