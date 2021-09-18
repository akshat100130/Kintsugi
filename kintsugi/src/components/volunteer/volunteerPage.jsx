import NavBar from '../utilities/navbar';
import Face from '../utilities/face';
import Footer from '../utilities/footer';
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