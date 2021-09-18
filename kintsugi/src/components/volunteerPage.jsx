import NavBar from './navbar';
import Face from './face';
import Footer from './footer';
import VolunteerForm from './volunteerForm';

export default function Volunteer() {
    return (
      <div>
        <NavBar />
        <Face />   
        <VolunteerForm />
        <Footer />
      </div>
    );
  }