import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from '../contentWrapper/ContentWrapper';
import "./style.scss"

const Footer = () => {
  return (
    <footer className='footer'>
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of USe</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul> 
        <div className="infoText1">
        Thank you for visiting our website! We strive to provide you with the best and most up-to-date information possible. Please note that the information presented on this site is intended for informational purposes only and should not be considered as professional advice or endorsement.

        All trademarks, logos, and images used on this website are the property of their respective owners. Any unauthorized use or reproduction of these materials is strictly prohibited.

        We value your privacy and take the protection of your personal information seriously. Please refer to our privacy policy for more details on how we collect, use, and safeguard your data.
        If you have any questions, concerns, or feedback regarding our website, please contact us. We appreciate your visit and hope you find our site informative and enjoyable!
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
        </div>

      </ContentWrapper>
    </footer>
  )
}

export default Footer
