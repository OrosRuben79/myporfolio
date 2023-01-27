import React from 'react'
import { Footer } from '../../utils/Footer';
import Navbars from '../../utils/Navbar';
import '../../style/Experience.css';
import judicial1 from '../../img/imgJobs/poderJudicial.jpg';
import judicial2 from '../../img/imgJobs/PoderJudicial2.jpg';
import judicial3 from '../../img/imgJobs/PoderJudicial3.jpg';
import muni1 from '../../img/imgJobs/muniCapital.jpg';
import muni2 from '../../img/imgJobs/muniCapital1.jpg';
import muni3 from '../../img/imgJobs/muniCapital2.jpg';

const Experiencia = () => {
    return (
        <>
            <Navbars />
            <div className="container">
                <h1>Experiencia Me</h1>
                <br />
                <hr />
                <br />
            
            <div className="card text-center">
                <div className="card-header">
                    <h3>Administrativo - Asistente Técnico</h3>
                    
                    <p>Poder Judicial de la Provincia de Mendoza</p>
                    · Jornada completa 
                    · 4 años 3 meses desde nov. 2018 - actualidad 
                    · Dirección: Entre calles, Patricias, Virgen del Carmen y España
                    · Mendoza Argentina
                </div>
                <div className="card-body">
                    <h5 className="card-title">Rol y Desempeño</h5>
                    <p className="card-text">Desde mi ingreso al Poder Jucial de la provincia de Mendoza me desempeño en el rol de Auxiliar Administrativo. Desde la llegada de la pandemia COVID-19 e integrado diferentes equipos de trabajo que por intermedio y através de la implementación de diferentes herramientas con las IT, permitieran continuar con el funcionamiento de la Justicia.  Este motivo me terminó acercando fuertemente al desarrollo web, actualmente me encuentro trabajando en una aplicación Frontend que le permita al usuario interctuar con el expediente digitalizado.
                    Tambien he tenido la oportunidad de aportar soluciones a través de las IT, tales como la creación y el manejo de páginas web realizadas en wordpress (para eventos puntuales), análisis de datos estadísticos, elaboración de informes, creación automatizada de informes por intermedio de macros en excel, creación de dashboard en excel..</p>
                    <hr/>
                    <h5 className="card-title">Aptitudes</h5>
                    <p className="card-text"> · React.js · PosgressSQL · Boostrap · HTML · CSS · Desarrollo web · Estadística · Auditoría</p>
                    <hr/>
                    <h5 className="card-title">🧰 Tecnologías que uso</h5>
                    <p className="card-text">JavaScript || HTML  || CSS || NodeJS || Express || React  || Redux  || Sequelize || PostgreSQL  || MongoDB   || Django  || Python</p>
                    <hr/>
                    <a href="http://www.jus.mendoza.gov.ar/inicio" target="_blank" className="btn btn-primary">Sitio Web</a>
                </div>
                <div class="card-footer text-muted">
                    <div className="row" >
                        <div className="col-md-4">
                            <img src={judicial1} class="rounded mx-auto d-block" alt="muni1"/>
                        </div>
                        <div className="col-md-4">
                            <img src={judicial2} class="rounded mx-auto d-block" alt="muni1"/>
                        </div>
                        <div className="col-md-4">
                            <img src={judicial3} class="rounded mx-auto d-block" alt="muni1"/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>

            <div class="card text-center">
                <div class="card-header">
                    <h2>Municipalidad de la Cidad de Mendoza</h2>
                    <h3>Rol: Administrativo - Profesor</h3>
                    <p>· Jornada completa </p>
                    <p>· Desde: oct. 2008, hasta: nov. 2018 - 10 años 2 meses.</p>
                    <p>· Dirección: 9 de julio y virgen del carmen, Mendoza - Argentina</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title"> Desempeño</h5>
                    <p className="card-text">Desde mi ingreso a la Municipalidad de la provincia de Mendoza me desempeño en el rol de Administrativo y de profesor de Danzas Folklóricas. Cumplí funciones en la Secretaria de turismo y Cultura, y en la Escuela de Danzas de la Municipalidad de la Ciudad de Mendoza, realicé tareas administrativas desde la creación, planificación e implementación de proyectos culturales apuntados a fines sociales y de inclusión.
                    Desarrolle aptitudes informáticas en la edición musical y la creación de diseños gráficos.
                    Tambien he teniso la oportunidad de aportar soluciones a través de las IT, tales como la creación y el manejo de páginas web realizadas en HTML y CSS (para eventos puntuales), con el fin de publicitar los eventos organizados</p>
                    <hr/>
                    <h5 className="card-title">Aptitudes</h5>
                    <p className="card-text">  · HTML · CSS · Desarrollo web · Capacidad de análisis · Análisis del valor · Coaching </p>
                    <hr/>
                    <h5 className="card-title">🧰 Tecnologías que usé</h5>
                    <p className="card-text"> HTML  || CSS || Excel || Adobe Audition || Filmora9 || Power Point || Word</p>
                    <hr/>
                    <a href="https://ciudaddemendoza.gob.ar/" target="_blank" className="btn btn-primary">Sitio Web</a>
                </div>
                <div class="card-footer text-muted">
                    <div className="row" >
                        <div className="col-md-4">
                            <img src={muni1} class="rounded mx-auto d-block" alt="muni1"/>
                        </div>
                        <div className="col-md-4">
                            <img src={muni2} class="rounded mx-auto d-block" alt="muni1"/>
                        </div>
                        <div className="col-md-4">
                            <img src={muni3} class="rounded mx-auto d-block" alt="muni1"/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>


            <div class="card text-center">
                <div class="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <span href="#" className="btn btn-primary">Go somewhere</span>
                </div>
                <div class="card-footer text-muted">
                    <div className="row" >
                        <div className="col-md-4">
                            <img src={muni1} class="rounded mx-auto d-block" alt="muni1"/>
                        </div>
                        <div className="col-md-4">
                            <img src={muni2} class="rounded mx-auto d-block" alt="muni1"/>
                        </div>
                        <div className="col-md-4">
                            <img src={muni3} class="rounded mx-auto d-block" alt="muni1"/>
                        </div>
                    </div>
                    2 days ago
                </div>
            </div>
            </div>

            <Footer />

        </>
    )
}

export default Experiencia;