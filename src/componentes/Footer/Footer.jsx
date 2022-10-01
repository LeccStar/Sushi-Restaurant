import React from 'react'
import "./Footer.css"
import sushilogo from "../Navbar/Navbarimg/2713978.png";


const Footer = () => {
    return (
        <div className='FooterCss'>
            <div className="iconoscontainer">
                <a className="iconos facebook" href="/" />
                <a className="iconos instagram" href="/" />
                <a className="iconos messenger" href="/" />
                <a className="iconos whatsapp" href="/" />
            </div>
            <div className='footercontainer'>
                <div className='d-flex'>
                    <img src={sushilogo} alt="Logo" width={30} height={24} className="d-inline-block align-text-top" />
                    <h4>Mr. Sushi</h4>
                </div>
                <div>
                    <h4>Menú</h4>
                    <p>Nosotros</p>
                    <p>Servicios</p>
                    <p>Contacto</p>
                    <p>Ubicacción</p>
                </div>
                <div>
                    <h4>A domicilio</h4>
                    <p>Llámanos +5520304050</p>
                    <p>Menú completo</p>
                </div>
                <div>
                    <h4>Legal</h4>
                    <p>Términos y Condiciones</p>
                    <p>Copyright</p>
                    <p>Aviso de privacidad</p>
                </div>
            </div>

        </div>
    )
}

export default Footer