import React from 'react'
import '../style/Footer.css'

import linkedin from '../img/linkedin.png'
import github from '../img/github.png'
import gmail from '../img/gmail.png'
import twiter from '../img/twiter.png'
import whatsap from '../img/whatsap.png'
import styles from '../style/LandingPage.module.css'

export const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="row">
                <div className="col-md-6">
                    <div className="title">
                        <h5>Ruben Oros</h5>
                        <div><span>  Full Stack Developer </span></div>
                        <div><span>  Técnico en Higiene y Seguridad Laboral.</span></div>
                        
                        
                    </div>
                <br/>
           
                </div>
                <div className="col-md-6">
                    <div className="image">
                        <h5>Contact</h5>
                    <a
                            href="https://www.linkedin.com/in/ruben-oros-02616121a/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={linkedin} alt="linkedin" className={styles.linkedin} />
                        </a>
                        <a
                            href="https://github.com/OrosRuben79"
                            target="_blank" rel="noreferrer"
                        >
                            <img src={github} alt="github" className={styles.github} />
                        </a>
                        <a
                            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={gmail} alt="gmail" className={styles.github} />
                        </a>
                        <a
                            href="https://twitter.com/ruben_oros1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={twiter} alt="twiter" className={styles.github} />
                        </a>
                        <a
                            href="https://wa.me/2615730454"
                            class="whatsapp_float"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={whatsap} alt="twiter" className={styles.github} />
                        </a>
                    </div>
                <br/>
                </div>
            </div>
        </div>
    </>
  )
}
