import ContactUsComponent from '../components/ContactUsComponent';

const FooterComponent = () => {
  return (
    <div className="footer w-full ">
    <div className="w-full h-16 bg-gray-800">
    </div>
    <div className="footer w-full h-100 bg-gray-800">
                <div className="w-full h-4/5 flex flex-row ">
                    <div className="w-full h-full pt-2 flex flex-row items-center justify-center">
                        <div className="">
                            <p className="text-2xl font-bold text-white">Contact Us</p>
                            <p className="text-white">Gunjal Compound,Kolsewadi,Kalyan(E)-421306</p>
                            <p className="text-white">Phone: 9702236759</p>
                            <p className="text-white">Email: gayatrividyalaya7@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-full h-full pt-2 flex flex-row items-center justify-center"> 
                        <div className="">          
                            <p className="text-2xl font-bold text-white">Social Media Links</p>
                            <a href="https://www.facebook.com/profile.php?id=61556437616351&sfnsn=wiwspwa&mibextid=RUbZ1f" className="text-white">Facebook</a>
                            <p className="text-bg-gray-800">.</p>
                            <p className="text-bg-gray-800">.</p> 
                        </div>                           
                    </div>
                    <div className="w-full h-full pt-2 flex items-center justify-center ">
                        <div className="w-full items-center justify-center flex flex-row">
                            <p className="text-2xl font-bold text-black"></p>
                        </div>
                        {/* <form className="w-full items-center justify-center">
                            <div className="w-2/3 space-x-2 py-1 flex flex-row">
                                <div className="w-1/2 flex flex-col">
                                    <input className="flex" type="text" placeholder="Name" />
                                </div>
                                <div className="w-1/2 flex flex-col">                     
                                    <input className="" type="text" placeholder="Phone" />
                                </div>
                            </div>
                            <div className="w-2/3 space-x-2 py-1 flex flex-row">
                                <div className="w-1/2 flex flex-col">                    
                                    <input className="flex" type="email" placeholder="Email Id" />
                                </div>
                                <div className="w-1/2 flex flex-col">                     
                                    <input className="flex" type="text" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="w-full py-1 space-x-2 flex">
                                <textarea className="input-message h-10" name="message" placeholder="Message"></textarea>
                                <button className='p-2 px-4 border border-light-grey border-solid bg-mid-grey rounded h-10 hover:border-white text-white'>Submit</button>
                            </div>               
                        </form> */}
                        <ContactUsComponent />
                    </div>
                </div>
                <div className="w-full h-1/5 flex">
                    <div className="w-full h-full flex flex-row items-center justify-center">
                        <p className="text-white">© 2024 Gayatri Vidyalaya. All Rights Reserved.</p>
                    </div>
                </div>
                <div className="bg-gray-800 text-md text-center">
                    <p className="text-white ">Developed by Soham Parab,Sushanth Shetty,Atharva Sambhaji,Vighnarth Nile and Guided by Dr. Sharmila Sengupta</p>
                </div>
    </div>
    </div>
  );
}

export default FooterComponent;
