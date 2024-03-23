import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';

const ActivitiesComponent = () => {
    return (
        <div className="fullpage w-full h-screen overflow-auto">
            <NavbarComponent />
                <div className="w-full flex items-center justify-center bg-blue-100 text-lg">
                    <div className="w-4/5 h-full bg-blue-200 text-justify flex">
                        <div className="w-1/2">
                            <div className="w-full p-4">
                                <h2 className="text-2xl font-bold mb-4">Sports Information</h2>
                                <p>
                                Gayatri Vidyalaya offers a variety of sports activities for students. This includes cricket, football, basketball, and more. 
                                </p>
                            </div>
                            <div className="w-full p-4">
                                <h2 className="text-2xl font-bold mb-4">Independence Day Celebration</h2>
                                <p>
                                Gayatri Vidyalaya celebrates Independence Day with great enthusiasm. The school is decorated with flags and the national anthem is sung.
                                </p>                  
                            </div>
                            <div className="w-full p-4">
                                <h2 className="text-2xl font-bold mb-4">Drawing competitions</h2>
                                <p>
                                Gayatri Vidyalaya conducts drawing competitions for students. The competitions are held on a variety of themes.
                                </p>                  
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='w-full p-4'>
                                <h2 className="text-2xl font-bold mb-4">Annual Day Celebration</h2>
                                <p>
                                Gayatri Vidyalaya celebrates its annual day with great enthusiasm. The annual day includes a variety of cultural programs and competitions.
                                </p>
                            </div>
                            <div className='W-full p-4'>
                                <h2 className="text-2xl font-bold mb-4">Science Exhibition</h2>
                                <p>
                                Gayatri Vidyalaya conducts a science exhibition every year. The exhibition includes a variety of science projects and experiments.
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