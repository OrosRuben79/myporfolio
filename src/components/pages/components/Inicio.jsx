import React from 'react'
import Navbars from '../../utils/Navbar'
import { Footer } from '../../utils/Footer'

const Inicio = () => {

  return (
    <>
      <Navbars />
      <div className="grid " >
        <div className="container">
          <h1>About Me</h1>
          <br />
          <hr />
          <div class="row">
            <div class="col-4">
              <div class="list-group" id="list-tab" role="tablist">
              <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">👋 ¿Quién soy?</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">⏪ ¿De dónde vengo?</a>
                <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">🔭 ¿Hacia dónde voy?</a>
                <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Un poco</a>
              </div>
            </div>
            <div class="col-8">
              <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Soy Ruben, vivo en Mendoza,  Argentina y me gusta bailar folklore argentino, aprendí React, JavaScript, CSS, Express, Prosgress SQL en el bootcamp henry. Siempre me gusto la tecnología, estar en la computadora aprendiendo cosas nuevas, mi camino no fue fácil al principio fue un reto familiarizarme con los lenguajes de programación, pero con mucha perseverancia fue superando cada obstáculo. Después de todos esos obstáculos, obtuve más habilidades para encontrar soluciones, leer documentación y estar en constante aprendizaje. Me desenvuelvo bien en Bakend usando JavaScript, Node.js, Express, MongoDB, Mongoose, en el Fontend uso React, Redux, CSS, Boostrap. Me gusta resolver problemas, estar en constante aprendizaje y siempre tengo una actitud positiva ante cualquier reto que se me presente. Como Desarrollador busco una oportunidad de crecimiento y poder desarrollar de una variedad distinta de aplicaciones. Mi objetivo a corto plazo es conseguir un empleo como desarrollador y mi objetivo a mediano plazo es especializarme en alguna tecnología y fortalecerme.</div>
                <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Actualmente me he desarrollado como FullStack Developer. Hace tiempo me interesó el mundo de las IT del cual he formado parte a travéz de mis aportes informáticos. Me fascina la idea de poder vivir de lo que me gusta, Soy una persona apasionada por el desarrollo de sistemas web y siempre he ido en busca de más habiendo efectuado soluciones gracias a la Implementación de Tecnologías, en los diferentes lugares en los que me he desempeñado. Mi carrera de pregrado, Técnico Superior en Higiene y Seguridad Laboral, me ha aportado una visión amplia y práctica de los negocios. Decidí ingresar al bootcamp de Henry, en el cuál pude aprender y profundizar mucho sobre código, tecnologías, y también la importancia del trabajo en equipo. Me gusta mucho el trabajo en grupos; poder interactuar con otros colegas e intercambiar conocimientos en busca de cumplir los objetivos planteados. Trabajo desde una perspectiva colaborativa aportando el desarrollo de mis habilidades blandas que permitan en cada tarea propuesta.🙂👋🚀</div>
                <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"> Termine mi carrera en el año 2021 como Técnico en Higiene y Seguridad Laboral, me desempeñé durante mas de quince años en distintas industrias, adaptandome a los diferentes roles que se me proponian. Luego a partir del 2014 incursioné con las herramientas informaticas mis primeros pasos con ellas fueron en la edición gráfica y musical, luego comence a incurcionar con excel en el desarrollo de base de datos, realizando calculos entre sus columnas y filas, en la creación de macros para su automatización y finalmente desplegando un Dashboard con los datos obtenidos. Luego de la pandemia del COVID-19, se me abrió la puerta a mi más grande desafío. La creación en forma exclusiva de un sistema de consulta de expedientes digitales.Participar en todos los procesos para la creación de una solución, acrecentó mi pasión por la informática y mi deseo de satisfacer las necesidades de los usuarios, aquí fue entonces donde se acrecento esta pasión por el código. Lo que más me gusta de este mundo es que hay mucho por aprender, y eso es un gran disparador de motivación para mi curiosidad.🤓🧠🚀</div>
                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Tengo un perfil analista, estadístico y disfruto de crear documentación y procesos de automatización con el fin de brindar una solución a la problemática existente. Voy donde sea que pueda aportar soluciones a través del código. Creo que el destino no es un lugar al cuál llegar, sino una manera de transitar. Elijo aquellos procesos donde me sienta seguro pero desafiado, exigido pero también cuidado y premiado.🙂👋🚀</div>
                
              </div>
            </div>
          </div>
          <br />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Inicio;