import React, { useState } from 'react'
import './index.scss'
import LogoTitle from '../../assets/s-logo.png'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function Home() {

  return (
    <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi,
            <br />
            I'm
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />aadan
            <br />
            Web Developer
          </h1>
          <h2>Front End Developer / Graphic Designer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo/>
      </div>
  )
}

export default Home