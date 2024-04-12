import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import scienceday from '../assets/Science.jpg';
import clean from '../assets/Clean.jpg';
import independenceday from '../assets/Independence.jpg';
import annualday from '../assets/Annual day.jpg';
import drawing from '../assets/Drawing.jpg';
import Sports from '../assets/Sports.jpg';
import meditation from '../assets/meditation.jpg';
import awareness from '../assets/Awareness.jpg';

const ActivitiesComponent = () => {
    return (
        <div className="fullpage w-full h-screen overflow-auto">
            <NavbarComponent />
                <div className="w-full flex items-center justify-center bg-blue-100 text-lg">
                    <div className="w-4/5 h-full bg-blue-200 text-justify flex">
                        <div className="w-1/2 flex flex-col">
                            <div className="w-full p-4 flex flex-col">
                                <img src={Sports} alt="Sports" className="w-full h-96" />
                                <h2 className="text-2xl font-bold mb-2">Sports Day</h2>
                                <p className="">
                                Gayatri Vidyalaya offers a variety of sports activities for students. This includes cricket, football, basketball, and more. 
                                </p>
                            </div>
                            <div className="w-full p-4">
                                <img src={independenceday} alt="Independence day" className="w-full h-96" />
                                <h2 className="text-2xl font-bold mb-2">Independence Day Celebration</h2>
                                <p>
                                Gayatri Vidyalaya celebrates Independence Day with great enthusiasm. The school is decorated with flags and the national anthem is sung.
                                </p>                  
                            </div>
                            <div className="w-full p-4">
                                <img src={drawing} alt="Drawing" className="w-full h-96" />
                                <h2 className="text-2xl font-bold mb-2">Drawing competition</h2>
                                <p>
                                Gayatri Vidyalaya conducts drawing competitions for students. The competitions are held on a variety of themes.
                                </p>                  
                            </div>
                            <div className='W-full p-4'>
                                <img src={awareness} alt="CleanIndia Drive" className="w-full h-96" />
                                <h2 className="text-2xl font-bold mb-2">Awareness Programme</h2>
                                <p>
                                The objective of organizing awareness programmes for school students is to educate and empower them with essential knowledge and skills to navigate various aspects of life, safety and social issues.
                                </p>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <div className='w-full p-4'>
                                <img src={annualday} alt="Annual Day" className="w-full h-96" />
                                <h2 className="text-2xl font-bold mb-2">Annual Day Celebration</h2>
                                <p>
                                Gayatri Vidyalaya celebrates its annual day with great enthusiasm. The annual day includes a variety of cultural programs and competitions.
                                </p>
                            </div>
                            <div className='W-full p-4'>
                                <img src={scienceday} alt="Science Exhibition" className="w-full h-96" />
                                <h2 className="text-2xl font-bold mb-2">Science Exhibition</h2>
                                <p>
                                Gayatri Vidyalaya conducts a science exhibition every year. The exhibition includes a variety of science projects and experiments.
                                </p>
                            </div>
                            <div className='W-full p-4'>
                                <img src={clean} alt="CleanIndia Drive" className="w-full h-96" />
                                <h2 className="text-2xl font-bold mb-2">Clean India Movement</h2>
                                <p>
                                Gayatri Vidyalaya conducts a "Clean India" drive every year. The exhibition includes a drive to clean the neighbourhood.
                                </p>
                            </div>
                            <div className='W-full p-4'>
                                <img src={meditation} alt="CleanIndia Drive" className="w-full h-96" />
                                <h2 className="text-2xl font-bold mb-2">Meditation Sessions</h2>
                                <p>
                                The objective of introducing meditation sessions in schools is to provide students with a practical tool for stress reduction, emotional regulation and improved focus. These sessions aim to cultivate mindfulness and promote mental health awareness among students.
                                </p>
                            </div>
                            
                        </div>
                    </div> 
                </div>
            <FooterComponent />
        </div>
    )
}

export default ActivitiesComponent;