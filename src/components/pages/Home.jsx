import React from 'react'
import '../style/Landing.css'
import author from '../img/porfolio.jpg';
import '../style/Home.css'
// import MainTitle from './MainTitle';
import  { motion } from 'framer-motion'
import styles from '../style/LandingPage.module.css'
import { Link } from 'react-router-dom';
import linkedin from '../img/linkedin.png'
import github from '../img/github.png'
import gmail from '../img/gmail.png'
import twiter from '../img/twiter.png'
import whatsap from '../img/whatsap.png'

import Particles from 'react-tsparticles';







const Home = () => {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: { 
            opacity:1,
            scale:1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5,
            },
        },
    }

    const item = {
        hidden: {y:20, opacity:0},
        visible: { y:0, opacity:1},
    }


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
            }} />
            <div className='header'>
                <img src={author} alt='ruben' />
                <motion.div variants={item}>
                    <h1 className='main-title' >Full Stack Developer</h1>
                </motion.div>
                <motion.div 
                className='icon-wrapper'
                variants={container}
                initial='hidden'
                animate='visible'
                >
                    <div style={{ display: 'flex'}}>
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
           
            <div className={styles.background}>
                <div className={styles.contTile}>
                    <div className={styles.CardTitle}>
                        <div className={styles.Title}>Bienvenido a mi portafolio!</div>
                        <div className={styles.parrafo}>
                            En este espacio podrás conocer sobre:
                            Quién soy, evaluar mi experiencia e interactuar con mis proyectos y contáctarme
                        </div>
                    </div>
                    <div className={styles.GlobalButton}>
                        <Link to="/inicio">
                            <button className={styles.button}>Ingresar</button>
                        </Link>
                    </div>
                    <div className={styles.links}>
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
                </div>
                <div className={styles.contGlobo}>
                    
                </div>
            </div>
        </>
    )
}

export default Home