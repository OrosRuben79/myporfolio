import React from 'react';
import { FaLinkedin, FaGithub, FaGoogle, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import style from '../style/Footer.module.css';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="row">
        <div className="col-md-6">
          <div className={style.title}>
            <div><span>Full Stack Developer</span></div>
            <div><span>Técnico en Higiene y Seguridad Laboral.</span></div>
          </div>
        </div>

        <div className="col-md-6">
          <div className={style.image}>
            <a
              href="https://www.linkedin.com/in/ruben-oros-02616121a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className={style.socialIcon} />
            </a>
            <a
              href="https://github.com/OrosRuben79"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className={style.socialIcon} />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl"
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogle className={style.socialIcon} />
            </a>
            <a
              href="https://twitter.com/ruben_oros1"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className={style.socialIcon} />
            </a>
            <a
              href="https://wa.me/2615730454"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={style.socialIcon} />
            </a>
          </div>
          <footer className={style.footerDate}>
             ©{new Date().getFullYear()}- Rubén Oros - Mi Portafolio
        </footer>
        </div>
      </div>
    </div>
  );
};
