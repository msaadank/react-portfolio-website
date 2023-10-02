import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React from 'react'
import mskLogo from '../../assets/s-logo.png'
import mskLogosub from '../../assets/msk-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
  return (
    <div className='nav-bar'>
         <Link className='logo' to='/'>
            <img src={mskLogo} alt='logo'/>
            <img className='sub-logo' src={mskLogosub} alt='subtitle'/>
         </Link>
         <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
         </nav>
         <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/m-saadan-khalid-19111a208/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/msaadank'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/msk_07gd/'>
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/saadan.khalid.9'>
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
                </a>
            </li>
         </ul>
    </div>
  )
}

export default Sidebar