import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Dashboard, Profile, LoginPage, RegisterPage } from "./components";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
