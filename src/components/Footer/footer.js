import React from "react";
import "./footer.css";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Cardápio</h4>
            <ul className="list-unstyled">
              <li>Promoções</li>
              <li>Pizzas</li>
              <li>Entradas</li>
              <li>Sobremesas</li>
              <li>Bebidas</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Sobre Nós</h4>
            <ui className="list-unstyled">
              <li>Seja um Franqueado</li>
            
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Atendimento ao cliente</h4>
            <ui className="list-unstyled">
              <li>Fale conosco</li>
              <li>Restaurantes</li>
              <li>Pesquisa de satisfação</li>
            </ui>
          </div>
          <div className="col" >
            <h4>Minha conta</h4>
            <ui className="list-unstyled">
              <li>Não tem conta? Crie agora mesmo</li>
              <li>Fazer login</li>
              <h4 className="list-unstyled">Termos</h4>
              <li>Política de privacidade</li>
              <li>Adendo à política de  privacidade</li>
              <li>Política de cookies e anúncio</li>
              <li>Termos de Uso</li>
            </ui>
            
            
          </div>
          
          <div className="col">
          
            <h4>Conecte-se com a Pizzaria Mamma Mia</h4>
            <ui className="list-unstyled">
              <li><FaFacebookF size={20}/> </li>
              <li><FaInstagram size={20} /></li>
              <li><FaYoutube size={20} /></li>
              <li><FaTwitter size={20}/></li>
              <li><FaWhatsapp size={20}/></li>
            </ui>
            <FaApple className="mb-1" size={35}/>
            <FaAndroid size={35} />
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="d-flex justify-content-center" >
            &copy;{new Date().getFullYear()} Fale conosco | Política de Privacidade |
            Termos de uso  
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;