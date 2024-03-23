import "./output.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from "react";
import LoginComponent from "./routes/Login";
import HomeComponent from "./routes/Home";
import AboutUsComponent from "./routes/AboutUs";
import AcademicsComponent from "./routes/Academics";
import ActivitiesComponent from "./routes/Activities";
import AdmissionComponent from "./routes/Admission";
import DashboardComponent from "./routes/Dashboard";

function App() {
  return (
    <div className="App h-screen font-poppins text-base">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomeComponent/> } />
          <Route path="/login" element = { <LoginComponent/>} />
          <Route path="/AboutUs" element = { <AboutUsComponent/>} />
          <Route path="/Academics" element = { <AcademicsComponent/>} />
          <Route path="/Activities" element = { <ActivitiesComponent/>} />
          <Route path="/Admission" element = { <AdmissionComponent/>} />
          <Route path="/Dashboard" element = { <DashboardComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
