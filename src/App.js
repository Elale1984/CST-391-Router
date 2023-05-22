import React, {useState} from 'react';
import {
    BrowsereRouter,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import ContactUs from "./Components/ContactUs";
import aboutUs from "./Components/AboutUs";
import LoginPage from "./Components/LoginPage";
import User from './User';
import NavBar from './Components/NavBar';
import PrivateRoute from "./Components/PrivateRoute";
import AboutUs from "./Components/AboutUs";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = (from, navigate) => {
        setIsLoggedIn(true);
        console.log('in handleLogin from', from);
        console.log('in handleLogin navigate', navigate);
        navigate(from, { replace: true });
    };
    return (
        <>
            <BrowsereRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<RootElement />} />
                    <Route
                        path='about'
                        element={
                            <PrivateRoute authorized={isLoggedIn}>
                                <AboutUs />
                            </PrivateRoute>
                        }
                    />
                    <Routes
                        path='/contact'
                        element={
                            <PrivateRoute authorized={isLoggedIn}>
                                <ContactUs />
                            </PrivateRoute>
                        }
                    />
                    <Route path='/login' element={<LoginPage onClick={handleLogin} />} />
                    <Route path='/user/:username' element={<User />} />
                </Routes>
                <h5>Some friends of mine</h5>
                <ul>
                    <li>
                        <link to='/user/Mary'>Mary</link>
                    </li>
                    <li>
                        <link to='/user/Justine'>Justine</link>
                    </li>
                    <li>
                        <link to='/user/Brianna'>Brianna</link>
                    </li>
                    <li>
                        <link to='/user/David'>David</link>
                    </li>
                </ul>
            </BrowsereRouter>
        </>
    );
};

const RootElement = () => <span></span>;
export default App;