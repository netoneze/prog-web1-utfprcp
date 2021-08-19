import React from "react";
import Logo from 'img/logo.png'
function Footer(){
    return (
        <footer className="item-container">
            <img className="img-footer" src={Logo} alt="Logotipo EADúvida" title="Logotipo footer"/>
                <p className="copyright">Copyright EADúvida - 2021</p>
        </footer>
    )
}
export default Footer;