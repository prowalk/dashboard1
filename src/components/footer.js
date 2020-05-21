import React from 'react'
import '../assets/styles/footer.css'
import { RedirectPage } from '../util/redirectPage';

const Footer = () => {
    const Logout = () => {
        RedirectPage('/')
    }

    return(
        <div className='footer'>
                <div className='footer-name' onClick={Logout}>LOG OUT</div>
        </div>
    )
} 

export default Footer