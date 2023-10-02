import './index.scss'
import React from 'react'
import mskLogo from '../../../assets/s-logo.png' 

function Logo() {

  return (
    <div className='logo-container'>
        <img className='solid-logo' src={mskLogo} alt='msk'/>
    </div>
  )
}

export default Logo