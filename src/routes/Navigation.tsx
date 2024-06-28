import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from '../layouts/Sidebar.tsx';
import Navbar from "../layouts/Navbar.tsx";
// import Footer from "../layouts/Footer";

import Login from "../screens/Login.tsx";
import Dashboard from "../screens/Dashboard.tsx";
import Users from "../screens/Users.tsx";
import UserDetails from "../screens/UserDetails.tsx";
import "../styles/Navigation.scss";


const Navigation : React.FC = () => {

    const location = useLocation();
    const isLoginRoute = location.pathname === '/login';
 

    return (
        <div className={!isLoginRoute ? "navigationWrapper" : ""}>
            {!isLoginRoute && <Navbar/>}
            <div className="navigationContent">
                {!isLoginRoute && <Sidebar/>}
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/users" element={<Users/>} />
                    <Route path="/user-details/:username" element={<UserDetails/>} />
                    {/* <Route path="/cart" element={<Cart/>} />
                    <Route path="/verifypayment" element={<VerifyPayment/>} />
                    <Route path="/product/:slug" element={<Product/>} /> 
                    <Route path="/category/:slug" element={<Category/>} /> 
                    <Route path="*" element={<NotFound/>} />  */}
                    {/* <Route path="/posts" element={<Posts/>} />  */}
                </Routes>
            </div>

        </div>
    )
}

const App: React.FC = () => {
    return (
        <Router>
            <Navigation />
        </Router>
    )
}

export default App;

