import React from 'react';
import Navbars from '../../utils/Navbar';
import { Footer } from '../../utils/Footer';
import perfilImagen from '../../img/logo_ruben-1.png';  // Asegúrate de poner la imagen en la carpeta correcta

const Inicio = () => {
  return (
    <>
      <Navbars />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            {/* Imagen de perfil */}
            <img
              src={perfilImagen}
              alt="Rubén"
              className="img-fluid rounded-circle mb-4"
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
            <h3 className="text-center">Rubén - Full Stack Developer</h3>
            <p className="text-center text-muted">¡Apasionado por la tecnología y el desarrollo web!</p>

            <div className="list-group">
              <h5 className="list-group-item active">Sobre mí</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Ubicación:</strong> Mendoza, Argentina</li>
                <li className="list-group-item"><strong>Idiomas:</strong> Inglés (B2)</li>
                <li className="list-group-item"><strong>Habilidades:</strong> React, Node.js, Express, MongoDB, PostgreSQL, CSS, Bootstrap</li>
                <li className="list-group-item"><strong>Objetivo:</strong> Crecer profesionalmente como desarrollador y aportar soluciones innovadoras.</li>
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            <h2 className="mb-4">¿Quién soy?</h2>
            <p>
            Soy Rubén, Full Stack Developer con una sólida formación técnica y una apasionada dedicación por la programación y la resolución de problemas complejos. Mi camino en la tecnología comenzó con la Tecnicatura en Programación en la Universidad Tecnológica Nacional (UTN), donde adquirí una base robusta en desarrollo de software y metodologías ágiles.
            </p>
            <p>
            Además de mi formación académica, he completado una especialización en Microservicios y Bases de Datos MongoDB en HenryStudent, donde profundicé en arquitecturas modernas y escalables. A lo largo de mi carrera profesional, he complementado mi aprendizaje con cursos avanzados en Seguridad Informática a través de Platzi y Google Academy, con el objetivo de adquirir una comprensión integral de las mejores prácticas para el desarrollo seguro de aplicaciones.
            </p>
            <p>
            Mi experiencia laboral me ha permitido desarrollar una amplia gama de habilidades en backend y frontend. En el área de backend, tengo experiencia trabajando con Node.js, Express, y bases de datos SQL y NoSQL como MongoDB. En el lado del frontend, me especializo en el desarrollo de interfaces interactivas y dinámicas utilizando React.js, Redux, y CSS, siguiendo siempre los principios de diseño centrado en el usuario.
            </p>
            <p>
            Mi objetivo profesional es continuar avanzando en el ámbito de microservicios y arquitecturas distribuidas, especializándome en nuevas tecnologías que me permitan crear soluciones escalables y de alto rendimiento. Busco integrarme a equipos multidisciplinarios donde pueda aportar mis conocimientos, seguir aprendiendo y fortaleciendo mi expertise en seguridad informática, para contribuir al desarrollo de aplicaciones más robustas y seguras.
            </p>

            <h3 className="mt-5">Habilidades</h3>
            <div className="row">
            <div className="col-md-3">
            <h5>Frontend</h5>
              <ul>
                <li>React.js</li>
                <li>HTML5, CSS3</li>
                <li>Bootstrap</li>
                <li>Redux</li>
                <li>JavaScript ES6+</li>
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Backend</h5>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Version Control</h5>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>GitLab</li>
              </ul>
              <hr/>
              <h5>Database Tools</h5>
              <ul>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>DBSchema</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Testing</h5>
              <ul>
                <li>Jest</li>
                <li>Mocha</li>
                <li>Chai</li>
                <li>Supertest</li>
                <li>React Testing Library</li>
              </ul>
            </div>
            </div>

            <h3 className="mt-5">Experiencia Laboral</h3>
            <p>
              Durante más de 15 años, he trabajado en diferentes campos, adaptándome a los roles requeridos por cada área. Mi experiencia más reciente fue como desarrollador Full Stack, en donde participé en el diseño y desarrollo de sistemas de gestión de expedientes digitales utilizando React.js y Node.js.
            </p>
            <p>
              Estoy constantemente en la búsqueda de nuevos desafíos, buscando siempre mejorar mis habilidades técnicas y de trabajo en equipo.
            </p>

            <h3 className="mt-5">Visión a Futuro</h3>
            <p>
              Mi objetivo es especializarme en el desarrollo de aplicaciones escalables y con arquitectura robusta. Busco seguir aprendiendo, aplicando las mejores prácticas de desarrollo y ser parte de equipos colaborativos que generen soluciones innovadoras.
            </p>

            <h3 className="mt-5">Contacto</h3>
            <p>
              Si quieres saber más sobre mi trabajo o colaborar en algún proyecto, ¡no dudes en contactarme!
            </p>
          </div>
        </div>
      </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      <Footer />
    </>
  );
}

export default Inicio;
