import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BookAppointment from './components/bookingPage';
import Home from './components/homePage';
import Confirmation from './components/confirmationPage';
import Contact from './components/contactPage';
import Support from './components/supportGroupPage';
import Volunteer from './components/volunteerPage';
import SignInPage from './components/signInPage';
import SignUpPage from './components/signUpPage';
import { COGNITO } from "./configs/aws";
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    aws_cognito_region: COGNITO.REGION,
    aws_user_pools_id: COGNITO.USER_POOL_ID,
    aws_user_pools_web_client_id: COGNITO.APP_CLIENT_ID,
});

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Dashboard() {
  return <h2>This is the Dashboard</h2>;
}

function App() {
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
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;