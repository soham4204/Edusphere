import React from "react";
import { Link } from "react-router-dom";
import small_logo from "../assets/small_logo.png";

const NavbarComponent = () => {
  return (
    <div className="flex justify-between items-center text-md px-4 bg-blue-300">
            <Link to="/" className="flex items-center flex-row">
                <img src={small_logo} alt="School Logo" className="h-24 float-left" />
                <div className="">
                    <h1 className="text-3xl font-bold float item-body">GAYATRI VIDYALAYA</h1>
                    <p className="text-sm font-semi-bold item-body">Shree Swami Samarth Shikshan Sanstha Kalyan</p>
                </div>
            </Link>
            <div className="flex justify-center ">
                <Link to="/AboutUs" className="font-bold text-xl p-9 transition duration-300 ease-in-out transform hover:bg-blue-400 hover:to-translate-x-1 active:translate-x-2 focus:shadow-outline focus:outline-none">About Us</Link>
                <Link to="/Admission" className="font-bold text-xl p-9 transition duration-300 ease-in-out transform hover:bg-blue-400 hover:to-translate-x-1 active:translate-x-2 focus:shadow-outline focus:outline-none">Admission</Link>
                <Link to="/Academics" className="font-bold text-xl p-9 transition duration-300 ease-in-out transform hover:bg-blue-400 hover:to-translate-x-1 active:translate-x-2 focus:shadow-outline focus:outline-none">Academics</Link>
                <Link to="/Activities" className="font-bold text-xl p-9 transition duration-300 ease-in-out transform hover:bg-blue-400 hover:to-translate-x-1 active:translate-x-2 focus:shadow-outline focus:outline-none">Activities</Link>
            </div>
            <div>
            <Link to="/Login">
                <button className="bg-blue-800 text-white font-bold text-xl py-4 px-8 rounded hover:bg-blue-900">
                    Login
                </button>
            </Link>
        </div>
    </div>
  );
}

export default NavbarComponent;