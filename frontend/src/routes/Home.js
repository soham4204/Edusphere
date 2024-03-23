import school_pic1 from '../assets/school pic 2.jpg';
import trustee_logo from '../assets/school logo.jpg';
import principal from '../assets/principals desk.jpg';
import school_advertisement from '../assets/school ader.jpg';
import "../marquee.css";
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { useNotice } from '../components/NoticeContext';

const HomeComponent = () => {
    const { notice } = useNotice();
    return (
        <div className="fullpage w-full h-screen overflow-auto">
            <div>
                <NavbarComponent />
            </div>
            <div className="w-full flex items-center justify-center bg-blue-100">
                <div className="w-4/5 h-full bg-blue-300">
                    <div className="h-14 w-full bg-blue-900 flex relative items-center justify-center overflow-x-hidden animation-marquee whitespace-nowrap">
                        <span className="text-bold text-white flex items-center justify-center">आचार विचार संस्कार देणारी एकमेव मराठी शाळा गायत्री विद्यालय</span>
                    </div>
                    <div className="w-full bg-white">
                        <img src={school_pic1} alt="School-pic" className="h-full w-full"/>
                    </div>
                    <div className="w-full mt-10 flex space-x-2">
                        <div className="info w-4/5 h-full flex space-x-4">
                            <div className="">
                                <div className="flex flex-row w-full space-x-2">
                                    <div className="bg-white w-1/2 h-96 flex flex-col items-center justify-center ml-2">
                                        <img src={trustee_logo} alt="School-pic" className="h-64 flex"/>
                                        <p className="text-2xl font-bold mt-4 text-center">Our mission is to provide a quality education to all students.</p>
                                    </div>
                                    <div className="bg-blue-500 w-1/2 h-96 flex">
                                        <div className=" h-full flex flex-col items-center justify-center">
                                            <p className="px-2 text-2xl font-bold text-justify text-white">Our mission is to provide a quality education to all students.</p>
                                            <ul className="px-2 text-justify">
                                                <li className="text-white">To provide a safe and supportive environment for all students.</li>
                                                <li className="text-white">We provide an environment which is orderly, safe, inviting and stimulating.</li>
                                                <li className="text-white">Each student experiences success, feels cared for and positive about their involvement with Greenfield Public School.</li>
                                                <li className="text-white">Our parental community feels welcomed and valued as full participants in their child’s education.</li>
                                                <li className="text-white">The leadership is supportive, encouraging, and fosters positive changes.</li>
                                                <li className="text-white">The staff is professional, caring, and committed to the success of all students.</li>
                                                <li className="text-white">The school is a place where students, staff, and parents feel a sense of belonging.</li>
                                            </ul>
                                        </div>                           
                                    </div>
                                </div>
                                <div className="w-full mx-2 mt-4">
                                    <div className="bg-white mr-2 mb-4">
                                        <div className=" w-2/5 h-80 flex flex-col items-center justify-center float-right ml-2 py-4">
                                            <img src={principal} alt="School-pic" className="h-64 flex"/>
                                            <p className="text-2xl font-bold mt-4 text-center ">Mr. Arun Nile</p>
                                        </div>
                                        <div className="px-2">
                                            <p className="text-justify">
                                            Welcome to our school! As the principal, I am committed to providing a safe and nurturing environment for all students.
"Flowers leave part of their fragrance in the hand that bestows them." The mind is not a vessel to be filled but a fire to be kindled. I appreciate the staff and students of all faculties who use various modes of expansion to present their ideas. As long as our ideas are expressed and thoughts kindled, we can be sure of learning as everything begins with an idea. Just as our mother earth gives us more and more, Learning is not a process limited to schools and colleges only, nor does it end with the conclusion of one's school career. It is indeed a lifelong process. The school is oriented to the total formation of a child and to adaptations of various methods suiting the dynamics of changing world in order to achieve common goals and objectives. It is further characterized by sharing vision, responsibility and above all love and faith in goal in order to achieve it. We live today in a world that is very different from the one we grew up, in the one we were educated in. The world today is changing at such an accelerated rate where we as educators need to pause and reflect on this entire system of education. Our school is well equipped to prepare our children to face the challenges that the future holds and work at implementing a well-balanced curriculum to ensure that the children who walk into the portals of VPS will not just leave their school years but truly be prepared to face life's challenges. Even as we impart education to match the advancement in technology and globalization, we march our children ahead with ethos of moral values and principles. We endeavor constantly to instill these qualities in our children. We pride ourselves to help them grow and develop into sensitive and responsible citizens of the future. Aristotle once said that, "Educating the mind without educating the heart is no education at all". Arun Nile.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex items-center justify-center">
                                    <div className="w-4/5 mx-2 my-4 bg-blue-500 justify-center items-center">           
                                        <img src={school_advertisement} alt="School-pic" className=""/>                                       
                                    </div>
                                </div>
                                <div className="w-full h-48 flex flex-row justify-evenly mx-2 mt-4 space-x-2 items-center">
                                    <div className="w-1/5 h-40 bg-blue-500 flex flex-col justify-center items-center rounded-lg">
                                        <h2 className="text-white font-bold text-2xl">100% Result</h2>
                                        <p className='text-white flex text-center'>Ensuring success for every student.</p>
                                    </div>
                                    <div className="w-1/5 h-40 bg-blue-500 flex flex-col justify-center items-center rounded-lg">
                                        <h2 className="text-white font-bold text-2xl">E-Learning</h2>
                                        <p className='text-white flex text-center'> Access our comprehensive online learning resources.</p>
                                    </div>
                                    <div className="w-1/5 h-40 bg-blue-500 flex flex-col justify-center items-center rounded-lg">
                                        <h2 className="text-white font-bold text-2xl text-center">Experienced faculty</h2>
                                        <p className='text-white flex text-center'>Dedicated to provide and support at every step</p>
                                    </div>
                                    <div className="w-1/5 h-40 bg-blue-500 flex flex-col justify-center items-center rounded-lg">
                                        <h2 className="text-white font-bold text-2xl">Semi-English</h2>
                                        <p className='text-white flex text-center'>Specialized for students studying in semi-english.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="notice board w-1/5 bg-blue-600 mr-2 mb-4">
                            <div className='  bg-white mx-1 h-full text-black '>
                                <div className='bg-black w-full h-1'>
                                </div>
                                <div className="mb-1 w-full">
                                    <p className="text-2xl font-bold text-black text-center mb-1 ">Notice Board</p>
                                </div> 
                                <div className='bg-black w-full h-1'>
                                </div>
                                <div className='w-full text-black'>
                                {notice && (
                                <div>
                                    {notice.type === 'text' && <p>{notice.content}</p>}
                                    {notice.type === 'image' && <img src={notice.content} alt="Notice" />}
                                    {notice.type === 'hyperlink' && <a href={notice.content}>{notice.content}</a>}
                                </div>
                                )}
                                </div>               
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
            <div>
                <FooterComponent />
            </div>
        </div>
    )
}

export default HomeComponent