import React from 'react';
import HeaderLogin from '../../components/headerlogin';
import '../../assets/styles/login.css'
import Prowalk from '../../assets/images/Logo-Prowalk-minuscula.png'

const Login = () => {
    
    return(
        <>
            <HeaderLogin />
            <div className='container-fluid'>
                <div className='img-login'>
                    <img src={Prowalk} className='img-fluid picture-login' alt='prowalk' />
                </div>
            </div>
        </>
    )
}

export default Login