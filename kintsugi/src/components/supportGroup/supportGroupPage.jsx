import NavBar from '../utilities/navbar';
import Face from '../utilities/face';
import SectionOne from '../utilities/sectionOne';
import Footer from '../utilities/footer';
import SupportGroupForm from './supportGroupForm';

export default function Support() {
    return (
      <div>
        <NavBar />
        <Face notDefault={true} heading="JOIN A SUPPORT GROUP" text="Lorem ipsum dolor sit amet."/>
        <SectionOne heading="What is the page?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation." button="JOIN GROUP" flipper={false}/>
        <SupportGroupForm />
        <SectionOne heading="Volunteer with us!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation." button="GET STARTED" flipper={true}/>
        <Footer />
      </div>
    );
  }