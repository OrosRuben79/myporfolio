import React from 'react'
import Navbars from '../../utils/Navbar'
import fomdoAbout from '../../img/fomdoAbout.jpg'
import aboutLateral from '../../img/aboutLateral.jpg'
import fondoAbout1 from '../../img/fondoAbout1.jpg'
import { Footer } from '../../utils/Footer'

const Inicio = () => {

  return (
    <>
      <Navbars />
      <div className="grid " >
        <div className="container">
          <h1>About Me</h1>
          <br/>
          <hr/>
          <br/>
          <div className="row">
            <div className="col-md-6">
              <div className="card" style={{ width: '35rem' }}>
                <div className="card-body">
                  <h5 className="card-title">👋 ¿Quién soy?</h5>

                  <p className="card-text">Mi nombre es Rubén y actualmente me he desarrollado como FullStack Developer. Hace tiempo me interesó el mundo de las IT del cual he formado parte a travéz de mis aportes informáticos. Me fascina la idea de poder vivir de lo que me gusta, Soy una persona apasionada por el desarrollo de sistemas web y siempre he ido en busca de más habiendo efectuado soluciones gracias a la Implementación de Tecnologías, en los diferentes lugares en los que me he desempeñado. Mi carrera de pregrado, Técnico Superior en Higiene y Seguridad Laboral, me ha aportado una visión amplia y práctica de los negocios. Decidí ingresar al bootcamp de Henry, en el cuál pude aprender y profundizar mucho sobre código, tecnologías, y también la importancia del trabajo en equipo. Me gusta mucho el trabajo en grupos; poder interactuar con otros colegas e intercambiar conocimientos en busca de cumplir los objetivos planteados. Trabajo desde una perspectiva colaborativa aportando el desarrollo de mis habilidades blandas que permitan en cada tarea propuesta.🙂👋🚀</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cardimagen" >
                <img src={fomdoAbout} alt="porfolio1"/>
              </div>
            </div>
          </div>
          <br />
          <hr/>
          <div className="row">
            <div className="col-md-3">
              <div className="cardimagen2">
              <img src={aboutLateral} alt="porfolio1"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card2" style={{ width: '35rem' }}>
                <div className="card-body">
                  <h5 className="card-title">⏪ ¿De dónde vengo?</h5>

                  <p className="card-text"> Termine mi carrera en el año 2021 como Técnico en Higiene y Seguridad Laboral, me desempeñé durante mas de quince años en distintas industrias, adaptandome a los diferentes roles que se me proponian. Luego a partir del 2014 incursioné con las herramientas informaticas mis primeros pasos con ellas fueron en la edición gráfica y musical, luego comence a incurcionar con excel en el desarrollo de base de datos, realizando calculos entre sus columnas y filas, en la creación de macros para su automatización y finalmente desplegando un Dashboard con los datos obtenidos. Luego de la pandemia del COVID-19, se me abrió la puerta a mi más grande desafío. La creación en forma exclusiva de un sistema de consulta de expedientes digitales.Participar en todos los procesos para la creación de una solución, acrecentó mi pasión por la informática y mi deseo de satisfacer las necesidades de los usuarios, aquí fue entonces donde se acrecento esta pasión por el código. Lo que más me gusta de este mundo es que hay mucho por aprender, y eso es un gran disparador de motivación para mi curiosidad.🤓🧠🚀</p>

                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cardimagen2" >
              <img src={aboutLateral} alt="porfolio1"/>
              </div>
            </div>
          </div>
          <br />
          <hr/>
          <div className="row">
            <div className="col-md-6">
            <div className="cardimagen" >
              <img src={fondoAbout1} alt="porfolio1"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card3" style={{ width: '35rem' }}>
                <div className="card-body">
                  <h5 className="card-title">🔭 ¿Hacia dónde voy?</h5>

                  <p className="card-text">Tengo un perfil analista, estadístico y disfruto de crear documentación y procesos de automatización con el fin de brindar una solución a la problemática existente. Voy donde sea que pueda aportar soluciones a través del código. Creo que el destino no es un lugar al cuál llegar, sino una manera de transitar. Elijo aquellos procesos donde me sienta seguro pero desafiado, exigido pero también cuidado y premiado.🙂👋🚀</p>

                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Inicio;