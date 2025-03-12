import React, { useEffect, useState } from 'react';
import '../style/Landing.css';
import author from '../img/porfolio.jpg';
import { motion } from 'framer-motion';
import styles from '../style/LandingPage.module.css';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { FaFacebook, FaLinkedin, FaGithub, FaGoogle, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Home = () => {
  const [text, setText] = useState("");
  const [showBackground, setShowBackground] = useState(false);
  const fullText = "Full Stack Developer :-)..";

  // Efecto para la escritura del texto
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => {
        if (i < fullText.length) {
          i++;
          return fullText.substring(0, i);
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);

    // Después de 60 segundos, cambia el estado a true
    const timeout = setTimeout(() => {
      setShowBackground(true);
    }, 6000); // 60 segundos

    return () => {
      clearInterval(interval);
      clearTimeout(timeout); // Limpiar el timeout cuando el componente se desmonte
    };
  }, []);


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <Particles
        params={{
          "fps_limit": 28,
          "particles": {
            "collisions": {
              "enable": false
            },
            "number": {
              "value": 200,
              "density": {
                "enable": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 30,
              "opacity": 0.4
            },
            "move": {
              "speed": 1
            },
            "opacity": {
              "anim": {
                "enable": true,
                "opacity_min": 0.05,
                "speed": 1,
                "sync": false
              },
              "value": 0.4
            }
          },
          "polygon": {
            "enable": true,
            "scale": 0.5,
            "type": "inline",
            "move": {
              "radius": 10
            },
            "url": "/small-deer.2a0425af.svg",
            "inline": {
              "arrangement": "equidistant"
            },
            "draw": {
              "enable": true,
              "stroke": {
                "color": "rgba(255, 255, 255, .2)"
              }
            }
          },
          "retina_detect": false,
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              }
            },
            "modes": {
              "bubble": {
                "size": 6,
                "distance": 40
              }
            }
          }
        }} 
      />
      <div className="header">
        <img src={author} alt="ruben" />
        
        <motion.div variants={item}>
          <h1 className="main-title">
            <motion.span
              className="typing-effect"
              key={text} 
            >
              {text}
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          className="icon-wrapper"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div style={{ display: 'flex' }}>
            <motion.div className="item-1 item" variants={item}></motion.div>
            <motion.div className="item-2 item" variants={item}></motion.div>
            <motion.div className="item-3 item" variants={item}></motion.div>
            <motion.div className="item-4 item" variants={item}></motion.div>
            <motion.div className="item-5 item" variants={item}></motion.div>
            <motion.div className="item-6 item" variants={item}></motion.div>
            <motion.div className="item-7 item" variants={item}></motion.div>
            <motion.div className="item-8 item" variants={item}></motion.div>
            <motion.div className="item-9 item" variants={item}></motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Sección que aparece con el scroll */}
      {showBackground === true ? (
        <div className={styles.background}>
          <div className={styles.container}>
            {/* Sección del título y descripción */}
            <div className={styles.textSection}>
              <h1 className={styles.title}>Bienvenido a mi portafolio!</h1>
              <p className={styles.description}>
                En este espacio podrás conocer sobre quién soy, evaluar mi experiencia, 
                interactuar con mis proyectos y contactarme.
              </p>
              <Link to="/inicio">
                <button className={styles.button}>Ingresar</button>
              </Link>
            </div>

            {/* Sección de enlaces sociales */}
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/ruben-oros-02616121a/" target="_blank" rel="noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <FaFacebook className={styles.icon} />
              </a>
              <a href="https://github.com/OrosRuben79" target="_blank" rel="noreferrer">
                <FaGithub className={styles.icon} />
              </a>
              <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
                <FaGoogle className={styles.icon} />
              </a>
              <a href="https://wa.me/2615730456" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className={styles.icon} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      ): null}
    </>
  );
};

export default Home;
