import FooterComponent from '../components/Footer';
import NavbarComponent from '../components/Navbar';
import Secondarypic from '../assets/Secondary.jpg';
import Primarypic from '../assets/Primary.jpg';
import Certification from '../assets/Certificates.jpg';


const AcademicsComponent = () => {
    return (
        <div className="fullpage w-full h-screen overflow-auto">
            <NavbarComponent />
            <div className="w-full flex items-center justify-center bg-blue-100">
                <div className="w-4/5 h-full bg-blue-200">
                    <div class="container mx-auto p-8">
                        <div class="mb-8 text-lg">
                            <img src={Primarypic} alt="Primary Class" className="w-full" />
                            <h2 class="text-2xl font-bold mb-4">Primary School (1st to 7th Standard)</h2>
                            <p>At Gayatri Vidyalaya, we lay the foundation for lifelong learning during the primary years. Our curriculum is designed to foster curiosity, critical thinking, and creativity in our students. We provide a nurturing environment where students develop strong foundational skills in all subjects, including language, mathematics, science, and social studies.</p>
                        </div>
                        <div class="mb-8 text-lg">
                            <img src={Secondarypic} alt="Secondary class" className="w-full" />                       
                            <h2 class="text-2xl font-bold mb-4">Secondary School (8th to 10th Standard)</h2>
                            <p>As students transition into secondary school at Gayatri Vidyalaya, they embark on a journey of academic excellence and personal growth. Our comprehensive curriculum prepares students for the SSC (State Board) examinations, focusing on both theoretical knowledge and practical application of concepts. We offer a supportive learning environment where students are encouraged to explore their interests, pursue their passions, and excel in their chosen fields.</p>
                        </div>
                        <div className='text-lg'>
                            <img src={Certification} alt="Certificates Distribution" className="w-full" />
                            <h2 class="text-2xl font-bold mb-4">Certifications</h2>
                            <p>Gayatri Vidyalaya is proud to be certified by the Adarsh Mahapour Puraskar, recognizing our commitment to excellence in education and holistic development of students. This prestigious certification reflects our dedication to providing quality education and nurturing future leaders who will make a positive impact on society.</p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default AcademicsComponent;