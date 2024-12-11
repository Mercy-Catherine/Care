import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Login from "./component/login/Login";
import Order from "./component/order/Order";
import SignupPage from "./component/signuppage/SignupPage";
import UserSignup from "./component/usersignup/UserSignup";
import AdminSignup from "./component/adminsignup/AdminSignup";
import DoctorSignup from "./component/doctorsignup/DoctorSignup";
import PharmacySignup from "./component/pharmacysignup/PharmacySignup";
import Home from "./component/home/Home"; // Added Home component

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />  {/* Make sure Home component exists */}
                <Route path="/login" element={<Login />} />
                <Route path="/order" element={<Order />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/signup/user" element={<UserSignup />} />
                <Route path="/signup/admin" element={<AdminSignup />} />
                <Route path="/signup/doctor" element={<DoctorSignup />} />
                <Route path="/signup/pharmacy" element={<PharmacySignup />} />
            </Routes>
        </Router>
    );
};

export default App;

