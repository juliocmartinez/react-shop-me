import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layaut from '../containers/Layaut';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layaut>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recovery-password" element={<RecoveryPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layaut>

        </BrowserRouter>

    );
}

export default App;