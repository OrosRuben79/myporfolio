import React from 'react'
import Navbars from '../../utils/Navbar'
import { Footer } from '../../utils/Footer'

const Inicio = () => {

  return (
    <>
      <Navbars />
      <div className="grid " >
        <div className="container">
          <h1>Sobre mí</h1>
          <br />
          <hr />
          <div class="row">
            <div class="col-4">
              <div class="list-group" id="list-tab" role="tablist">
              <a class="list-group-item list-group-item-action active" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">👋 ¿Quién soy?</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">⏪ ¿De dónde vengo?</a>
                <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">🔭 ¿Hacia dónde voy?</a>
                <a class="list-group-item list-group-item-action " id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">🙂 Conociéndome más</a>
              </div>
            </div>
            <div class="col-8">
              <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Soy Rubén, vivo en Mendoza,  Argentina y me gusta bailar folklore argentino, aprendí React, JavaScript, CSS, Express, Prosgress SQL en el Bootcamp Henry. Siempre me gustó la tecnología, estar en la computadora aprendiendo cosas nuevas. Mi camino no fue fácil, al principio fue un reto familiarizarme con los lenguajes de programación, pero con mucha perseverancia fui superando cada obstáculo. Después de todos esos obstáculos, obtuve más habilidades para encontrar soluciones, leer documentación y estar en constante aprendizaje. Me desenvuelvo bien en Backend usando JavaScript, Node.js, Express, MongoDB, Mongoose, en el Fontend uso React, Redux, CSS, Boostrap. Me gusta resolver problemas, estar en constante aprendizaje y siempre tengo una actitud positiva ante cualquier reto que se me presente. Como Desarrollador busco una oportunidad de crecimiento y poder desarrollar una variedad distinta de aplicaciones. Mi objetivo a corto plazo es conseguir un empleo como desarrollador y mi objetivo a mediano plazo es especializarme en alguna tecnología y fortalecerme.</div>
                <div class="tab-pane fade " id="list-home" role="tabpanel" aria-labelledby="list-home-list"> Actualmente me desempeño como FullStack Developer. Hace tiempo me interesó el mundo de las IT, del cual he formado parte a través de mis aportes informáticos. Me fascina la idea de poder vivir de lo que me gusta, soy una persona apasionada por el desarrollo de sistemas web y siempre he ido en busca de mayores desafíos, buscando mejores soluciones para mi desempeño con la Implementación de Tecnologías. Mi carrera de pregrado, Técnico Superior en Higiene y Seguridad Laboral, me ha aportado una visión amplia y práctica de los negocios. Decidí ingresar al bootcamp de Henry, en el cuál pude aprender y profundizar mis conocimientos sobre lenguajes de programación, tecnologías y la importancia del trabajo en equipo, el poder interactuar con otros colegas e intercambiar conocimientos en busca de cumplir los objetivos planteados. Trabajo desde una perspectiva colaborativa en búsqueda de brindar las soluciones más eficientes.🙂👋🚀</div>
                <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"> Me desempeñé durante más de quince años en distintas áreas adaptándome a los diferentes roles que la actividad requería. En el año 2014 incursioné con las herramientas informáticas, mis primeros pasos con ellas fueron en la edición gráfica y musical, posteriormente a través de excel comencé en el desarrollo de base de datos, realizando cálculos entre sus columnas y filas; en la creación de macros para su automatización y finalmente desplegando un Dashboard con los datos obtenidos. En el año 2020, luego de la pandemia del COVID-19, tuve la oportunidad de un nuevo desafío, participar en la creación en forma exclusiva de un sistema de consulta de expedientes digitales (Diseñado en React.js). En el año 2021 terminé mi carrera como Técnico en Higiene y Seguridad Laboral, El haber participado en los distintos procesos para la creación de soluciones tecnológicas, acrecentó mi pasión por la informática y el deseo de satisfacer las necesidades de los usuarios.🤓🧠🚀</div>
                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Con mi perfil de analista y estadístico mi objetivo es poder crear procesos de automatización con el fin de brindar soluciones adecuadas a las problemáticas planteadas. Mi visión a futuro sería poder desarrollarme como líder en Tecnologías Informáticas potenciando el trabajo en equipo.🙂👋🚀</div>
                
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