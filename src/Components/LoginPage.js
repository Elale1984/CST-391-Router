import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        const { from } = location.state || { from: { pathname: '/' } };
        console.log('handleLogin from', from);
        console.log('handleLogin navigate', navigate);
        props.onClick(from, navigate);
    };

    let from = '/';
    let text = '';

    if (location.state && location.state.from) {
        from = location.state.from.pathname;
        text = <h3>You must log in to visit "{from}"</h3>;
    }

    return (
        <div>
            {text}
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
