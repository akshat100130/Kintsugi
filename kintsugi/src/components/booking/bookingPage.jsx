import '../../css/book.css';
import SectionOne from '../utilities/sectionOne';
import NavBar from '../utilities/navbar';
import TherapistDisplay from './therapistDisplay';
import Footer from '../utilities/footer';
import Face from '../utilities/face';

export default function BookAppointment(){
    return (
        <div>
            <NavBar />
            <Face notDefault={true} heading="BOOK AN APPOINTMENT" text="Lorem ipsum dolor sit amet."/>
            <SectionOne heading = "Connect to a therapist"
                        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                        button = "FIND THERAPIST"
                        flipped = {false}
            />
            <TherapistDisplay />
            <SectionOne heading = "Need resources?"
                        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                        button = "JOIN GROUP"
                        flipped = {true}
            />
            <Footer />
        </div>
    );
}
