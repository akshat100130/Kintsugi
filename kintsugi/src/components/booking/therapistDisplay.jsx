import '../../css/book.css';
import TherapistCard from './therapistCard';

export default function BookAppointment(){
    return (
            <section id="therapist">
                <h1>Available Psychologists</h1>
                
                <div class="container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <TherapistCard />
                        </div>
                        <div class="col">
                            <TherapistCard />
                        </div>
                        <div class="col">
                            <TherapistCard />
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4" style={{marginTop: "3em"}}>
                        <div class="col">
                            <TherapistCard />
                        </div>
                        <div class="col">
                            <TherapistCard />
                        </div>
                        <div class="col">
                            <TherapistCard />
                        </div>
                    </div>
                </div>
            </section>
    );
}
