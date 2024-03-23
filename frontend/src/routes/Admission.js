import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';

const AdmissionComponent = () => {
    return (
        <div className="fullpage w-full h-screen overflow-auto text-justify">        
            <NavbarComponent />
            <div className="w-full flex items-center justify-center bg-blue-100">
                <div className="w-4/5 h-full bg-blue-200">
                    <div class="container mx-auto p-8">
                        <div class="mb-8">
                            <h2 class="text-2xl font-bold mb-4">Admission Procedure</h2>
                            <p class="mb-4 text-lg">Thank you for considering Gayatri Vidyalaya for your child's education. Our admission process is designed to be simple and transparent. Here's how you can apply:</p>
                            <ol class="list-decimal ml-8 text-lg">
                                <li>Fill out the online admission form on our website.</li>
                                <li>Submit the required documents, including birth certificate, previous academic records, and any other relevant documents.</li>
                                <li>Attend an entrance examination and/or interview, if applicable.</li>
                                <li>Upon acceptance, complete the admission formalities and pay the necessary fees.</li>
                            </ol>
                        </div>
                        <div class="mb-8">
                            <h2 class="text-2xl font-bold mb-4">Eligibility Criteria</h2>
                            <p class="mb-4 text-lg">Admission to Gayatri Vidyalaya is open to students who meet the following eligibility criteria:</p>
                            <ul class="list-disc ml-8 text-lg">
                                <li>For primary school (1st to 7th standard): Age-appropriate for the respective standard.</li>
                                <li>For secondary school (8th to 10th standard): Based on previous academic performance and entrance examination results (if applicable).</li>
                            </ul>
                        </div>  
                    <div>
                </div>
            </div>
        </div>
    </div>    
           <FooterComponent /> 
    </div>
    )
}

export default AdmissionComponent;