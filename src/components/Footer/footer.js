import React from "react";
import "./footer.css";
import { FcPhoneAndroid } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

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
          <div className="col">
            <h4>Minha conta</h4>
            <ui className="list-unstyled">
              <li>Não tem conta? Crie agora mesmo</li>
              <li>Fazer login</li>
              <h4 className="list-unstyled">Termos</h4>
              <li>Política de privacidade</li>
              <li>Adendo à política de privacidade</li>
              <li>Política de cookies e anúncio</li>
              <li>Termos de Uso </li>
            </ui>
          </div>

          <div className="col">
            <h4 >Conecte-se com a Pizzaria Mamma Mia</h4>
            <ui className="list-unstyled ">
              <li>Facebook </li>
              <li> Instagram</li>
              <li>Youtube</li>
              <li>Twitter</li>
              <li>Wattsapp</li>
            </ui>
            <div className="col">
            <FcPhoneAndroid size={35} />
            <AiFillApple size={35} />
            </div>
          </div>
        </div>
       <hr/>
        <div className="row">
          <p className="d-flex justify-content-center">
            Fale conosco | Política de Privacidade | Termos de uso
          </p>
          <hr/>
          <p className="d-flex justify-content-start">
            Copyright &copy;{new Date().getFullYear()} Pizzaria Mamma Mia LTDA-
            CNPJ :00.0000.000/0000-00 AV Brasil - São Paulo/SP Todos os Direitos
            Reservados. | Imagens Meramente Ilustrativas.
          </p>
          <hr />
          <p className="d-flex justify-content-start">
            Os preços apresentados já incluem impostos. Imagens meramente
            ilustrativas. Promoções, preços e combos podem variar dependendo da
            sua localização. Se ocorrer qualquer divergência nos valores dos
            produtos ou promoções, o preço válido é o apresentado no carinho de
            compras. Preçoes e condições de pagamento exclusivos para compras
            via internet. As promoções são válidas enquanto durarem os estoques.
            A Pizzaria Mamma Mia se reserva o direito de alterar e/ou remover
            itens ou promoções do cardápio sem aviso prévio. O horário de
            funcionamento e de entrega varia de acordo com sua localização ou
            unidade escolhida. Digite o seu CEP Para descobrir se fazemos
            entregas para sua região. 
          
          </p>
          <p className="d-flex justify-content-center">Pizzaria Mamma Mia LTDA- CNPJ
            :00.0000.000/0000-00 AV Brasil - São Paulo/SP</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
