import NavBar from '../utilities/navbar';
import Face from '../utilities/face';
import Footer from '../utilities/footer';
import ConfirmationBanner from './confirmationBanner';
import '../../css/confirmation.css';

export default function Confirmation(){
    return (
            <div>
                <NavBar />
                <Face />
                <ConfirmationBanner />
                <Footer />
            </div>
    );
}