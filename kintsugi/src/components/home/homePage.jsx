import NavBar from '../utilities/navbar';
import Face from '../utilities/face';
import SectionOne from '../utilities/sectionOne';
import SectionThree from '../utilities/sectionThree';
import SectionFour from '../utilities/sectionFour';
import Footer from '../utilities/footer';

export default function Home() {
    return (
      <div>
        <NavBar />
        <Face />
        <SectionOne text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation."
                    button="FIND THERAPIST"
                    heading="Connect to a therapist"
                    flipped={false}
        />
        <SectionOne text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation."
                    button="FIND THERAPIST"
                    heading="Connect to a therapist"
                    flipped={true}
        />
        <SectionThree />
        <SectionFour />
        <Footer />
      </div>
    );
  }