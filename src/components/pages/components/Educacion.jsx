import React from 'react'
import { Footer } from '../../utils/Footer';
import  Navbars  from '../../utils/Navbar'

const Educacion = () => {
    return(
        <>
           <Navbars />
      <div className="grid " >
        <div className="container">
          <h1>Educación</h1>
          <br />
          <hr />
          <div class="row">
            <div class="col-4">
              <div class="list-group" id="list-tab" role="tablist">
              <a class="list-group-item list-group-item-action active" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Estudios Realizados</a>
                {/* <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">...</a> */}
                <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Cursos Realizados</a>
                {/* <a class="list-group-item list-group-item-action " id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">...</a> */}
              </div>
            </div>
            <div class="col-8">
              <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                <p>• Full Stack Developer - Henry Student, 2023 - https://www.soyhenry.com/about-us</p>
                <p>• Tècnico en Higiene y Seguridad Laboral - Universidad Tècnologica Nacional,  2022 http://www.frm.utn.edu.ar/index.php</p>
                <p>• Programación desde 0 - Instituto online Egg, 2022 - https://moodle.eggeducacion.app/login/index.php</p>
                <p></p>
                ...</div>
                {/* <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div> */}
                
                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                <p>• Creacion y Manejos de Dashboard en libros de excel- capacitaciòn online, 2019</p>
                  <p>• Analisis de Datos, Manejo de tablas dinàmicas y gràficos dinàmicos</p>
                  <p>• Manejo de plataformas virtuales (meet, skipe, zoom) - capacitaciòn online, 2020</p>
                  <p></p>
                  <p></p>
                  ...</div>
                {/* <div class="tab-pane fade " id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div> */}
                
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
        <Footer />
        
        </>
    )
}

export default Educacion;