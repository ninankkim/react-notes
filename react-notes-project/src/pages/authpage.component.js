import React from 'react';
import LoginForm from '../components/login.component';
import RegisterForm from '../components/register.component';

const Authpage = () =>(
    <div className="row justify-content-between">
        <div className="col-md-5">
            <LoginForm />
        </div>

        <div style={{ border: '1px solid #ababab' }}></div>

        <div className="col-md-5">
            <RegisterForm />
        </div>
    </div>

);

export default Authpage;