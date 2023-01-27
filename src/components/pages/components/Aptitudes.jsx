import React from 'react'
import { Footer } from '../../utils/Footer';
import Navbars from '../../utils/Navbar'

const Aptitudes = () => {
    return (
        <>
            <Navbars />
            <h1>Aptitudes</h1>

            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        Column
                    </div>
                    <div class="col-md-4">
                        Column
                    </div>
                    <div class="col-md-4">
                        Column
                    </div>
                </div>
            </div>

            <Footer/>

        </>
    )
}

export default Aptitudes;