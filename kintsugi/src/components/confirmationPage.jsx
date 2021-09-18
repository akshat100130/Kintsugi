import NavBar from './navbar';
import Face from './face';
import Footer from './footer';
import ConfirmationBanner from './confirmationBanner';
import '../css/confirmation.css';

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