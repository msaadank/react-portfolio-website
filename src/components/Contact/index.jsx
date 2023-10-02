import React from 'react'
import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Contact() {

    const ref = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ijftl4i', 'template_8zxkvuw', ref.current, 'iOw2CFJoRnKHS0tiE')
      .then(() => {
          alert("Message sent successfully")
      }, () => {
          alert("Message failed to send")
      });
    }

  return (
    <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    Contact me
                </h1>
                <p>
                    I am interested in freelance opportunities - especially ambitious or
                    large projects. However, if you have any other request or question,
                    don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                    <form ref={ref} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND"
                                    style={{cursor: "pointer"}}/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Muhammad Saadan Khalid
                <br />
                Healthcare bhimber rd. Gujrat
                <br />
                Pakistan
                <br />
                <span>saadankhalidaid07@gmail.com</span>
                <br />
            </div>
            <div className="map-wrap">
                <MapContainer center={[32.59313232331919, 74.07993605867395]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                    <Marker position={[32.59313232331919, 74.07993605867395]}>
                        <Popup>Saadan lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    </>
  )
}

export default Contact