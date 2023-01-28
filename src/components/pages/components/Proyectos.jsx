import React from 'react'
import { Footer } from '../../utils/Footer';
import Navbars from '../../utils/Navbar'
import food1 from '../../img/imgProyect/food/landingFood.png';
import food2 from '../../img/imgProyect/food/homeFood.png';
import food3 from '../../img/imgProyect/food/detailCompraFood.png';
import food4 from '../../img/imgProyect/food/detailFood.png';
import food5 from '../../img/imgProyect/food/darkModeFood.png';
import food6 from '../../img/imgProyect/food/pagoFood.png';


const Proyectos = () => {
    return (
        <>
             <Navbars />
            <div className="container">
                <h1>Proyectos</h1>
                <br />
                <hr />
                <br />
                <div class="card text-center">
                    <div class="card-header">
                        <h2>App Henry´s Foods</h2>
                        <h3>Aplicación Web para Restaurantes</h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Descripción</h5>
                        <p className="card-text">Henry's Foods es el proyecto final que desarrollamos en el bootcamp de Henry. Es una Aplicación web que busca integrar el flujo de compra de un cliente y el dashboard del dueño del restaurant que use nuestra aplicaión web, sin la necesidad de tercerizar procesos. Se puede ingresar a nuestra Aplicación web creando un usuario nuevo, debiendo activar la cuenta ingresando al link que se le envia al email correspondiente, o registrandose con Google o GitHub. Desde la parte del cliente se pueden ver los menus disponibles, con sus respectivos detalles, con la posibilidad de dejar sus reseñas, y agregar los platos que deseen al carrito de compras. Alli implementamos una pasarela de pagos integrada con Stripe, que informa vía email el estado de la compra. Las comidas se pueden pedir por delivery, para comer en el lugar o se puede realizar una reserva e ir en una fecha determinada. El panel de Dashboard del Administrador, cuenta con gráficos y estadísticas de la ventas, usuarios nuevos y compras que se hacen semananalmente. Le permite al administrador realizar el CRUD completo en componentes como Platos (FOODS), Usuarios(USERS), Reseñas(REVIEWS) y mientras que en el componente ORDERS puedegestionar el estado de las ordenes. Esta Aplicación Web es Responsive y cuenta con Dark Mode y Light Mode </p>
                        <hr />
                        <h5 className="card-title">Librerias implementadas</h5>
                        <p className="card-text"> • Subida de imagenes: Cloudinary • Graficos: Chart.js • Envio de emails: Nodemailer • Pasarela de pagos: Stripe • Login : JSON Web Token</p>
                        <hr />
                        <h5 className="card-title">🧰 Tecnologías que uso</h5>
                        <p className="card-text">JavaScript || HTML  || CSS || NodeJS || Express || React.JS  || Redux  || Mongose || MongoDB || Tailwind || JWT || axios || GitHub ||    </p>
                        <hr />
                        <a href=" https://main-henry-client.vercel.app/ "  className="btn btn-primary">Deploy Food</a>
                        <a href=" https://github.com/OrosRuben79/Henry_Restaurant_Back "  className="btn btn-primary">Repositorio Back</a>
                    </div>
                    <div class="card-footer text-muted">
                        <div className="row" >
                            <div className="col-md-3">
                                <img src={food1} class="rounded mx-auto d-block" alt="muni1" />
                            </div>
                            <div className="col-md-3">
                                <img src={food2} class="rounded mx-auto d-block" alt="muni1" />
                            </div>
                            <div className="col-md-3">
                                <img src={food3} class="rounded mx-auto d-block" alt="muni1" />
                            </div>
                            <div className="col-md-3">
                                <img src={food4} class="rounded mx-auto d-block" alt="muni1" />
                            </div>
                            <div className="col-md-3">
                                <img src={food5} class="rounded mx-auto d-block" alt="muni1" />
                            </div>
                            <div className="col-md-3">
                                <img src={food6} class="rounded mx-auto d-block" alt="muni1" />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />

                
                
            </div>
            <Footer />

        </>
    )
}

export default Proyectos;