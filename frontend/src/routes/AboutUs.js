import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
// import awareness from '../assets/Awareness.jpg';
import school from '../assets/School .jpg';
// import meditation from '../assets/meditation.jpg';


const AboutUsComponent = () => {
    return (
        <div className="fullpage w-full h-screen overflow-auto text-lg">
            <NavbarComponent />
            <div className="w-full flex items-center justify-center bg-blue-100">
                <div className="w-4/5 h-full bg-blue-200">
                    <div className="container mx-auto px-8 py-6">
                        <div className="w-full text-justify">
                        <img src={school} alt="school" className="w-full" />
                            <h1 className="text-3xl font-bold mb-4">Our Vision</h1>
                            <p className="mb-4 text-lg">To provide a safe, nurturing, and stimulating environment where children are actively involved in the learning process. We strive to provide a balanced, integrated, and challenging curriculum that will enable students to become independent, self-sufficient, and responsible citizens of the world.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-lg">
                            <div>
                                <h2 className="text-xl font-bold mb-4">Prestigious School for Over 30 Years</h2>
                                <p className="mb-4 text-lg">We take pride in our long-standing tradition of providing quality education for over 30 years.</p>                          
                                <h2 className="text-xl font-bold mb-4">Student-Friendly Facilities</h2>
                                <ul className="list-disc ml-8">
                                    <li>Very clean and student-friendly computer labs</li>
                                    <li>Special division for semi-English students</li>
                                    <li>24/7 security surveillance</li>
                                    <li>Library and Laboratory facilities</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-4">Academic Achievements</h2>
                                <ul className="list-disc ml-8">
                                    <li>Consistently achieved 100% SSC results</li>
                                    <li>Offer various exams including Homi Bhabha exams, Scholarship exams and Drawing exams</li>
                                </ul>
                                <h2 className="text-xl font-bold mt-8 mb-4">Extracurricular Activities</h2>
                                <ul className="list-disc ml-8">
                                    <li>Annual Dance Competition</li>
                                    <li>Annual Sports Competition</li>
                                    <li>Yoga classes for mental and physical health benefits</li>
                                    {/* <img src={meditation} alt="Awareness" className="w-full float-left" /> */}
                                    <li>E-Learning resources available</li>
                                    {/* <img src={awareness} alt="Awareness" className="w-full float-left" /> */}
                                    {/* <li>Awareness Programme for school students</li> */}
                                    
                                </ul>
                            </div>
                        </div>
                        <div>
                            {/* <img src={awareness} alt="Awareness" className="w-full float-left" /> */}
                            <div className="w-full text-justify">
                                <h1 className="text-3xl font-bold my-4">Gayatri Vidyalaya</h1>
                                <p>Welcome to Gayatri Vidyalaya, where excellence in education meets a tradition of over 30 years. Founded with a vision to nurture young minds and instill a passion for learning, we take pride in providing a safe and supportive environment for students to thrive. Our state-of-the-art facilities, including clean and student-friendly computer labs, specialized divisions for semi-English learners, and comprehensive e-learning resources, ensure that every student has the tools they need to succeed. With a dedicated team of friendly teaching and non-teaching staff, 24/7 security surveillance, and enriching extracurricular activities such as yoga classes and annual dance and sports competitions, we foster holistic development and well-being. At [Your School Name], academic excellence is not just a goal; it's a tradition. Join us on this journey of discovery and growth.</p>        
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <FooterComponent />
        </div>
    );
}

export default AboutUsComponent;