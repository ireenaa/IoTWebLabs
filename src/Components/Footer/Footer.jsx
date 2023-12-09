import React from 'react'
import '../Footer/Footer.css'
import logo from '../Assets/logo.svg'
import inst_icon from '../Assets/instagram_icon.png'
import pin_icon from '../Assets/pintester_icon.png'
import whats_icon from '../Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
        
        <div className="footer-logo">
            <img src={logo} alt="Logo" />
        </div>
          <ul className="footer-links">
                <li>CONTACT</li>
                <li>ABOUT</li>
                <li>SHIPPING</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={inst_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pin_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whats_icon} alt="" />
                </div>
            </div>
        <div className="footer-copyright">
            <hr />
            <p>© 2023 Shelly. Terms of use and privacy policy.</p>
        </div>
    </div>
  )
}

export default Footer