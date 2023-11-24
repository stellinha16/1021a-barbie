import './Footer.css'
import LinkNav from '../linknav/LinkNav'
import Mage from "../img/barbe.png"

export function Footer(){
  return(
    <footer className='footer-footer'>
        <div>
        <img className='footer-img' src={Mage}  alt=''/>
      </div>
     <ul className='Lista'>
    <li>
        <h3> Produtos </h3>
    </li>
    <li>
        <LinkNav url="/barbie" texto='Compre sua Barbie'/>
          </li>
          <li>
          <LinkNav url="/m" texto='Assistir'/>
          </li>
          <li>
          <LinkNav url="/n" texto='Acessórios'/>
          </li>
          <li>
          <LinkNav url="/o" texto='Roupas'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3> Informações</h3>
    </li>
    <li>
        <LinkNav url="/a" texto='Cookies'/>
          </li>
          <li>
          <LinkNav url="/b" texto='Sobre'/>
          </li>
          <li>
          <LinkNav url="/c" texto='Atendimento'/>
          </li>
          <li>
          <LinkNav url="/d" texto='Feedback'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3>Filmes</h3>
    </li>
    <li>
        <LinkNav url="/e" texto='Barbie Lago Dos Cisnes '/>
          </li>
          <li>
          <LinkNav url="/f"texto='Babie-A Princesa & a Pop Star'/>
          </li>
          <li>
          <LinkNav url="/g" texto='Barbie-Life in the Dreamhouse'/>
          </li>
          <li>
          <LinkNav url="/h" texto='Barbie Rainha das Fadas'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3>Sobre nós</h3>
    </li>
    <li>
        <LinkNav url="/i" texto='Informações corporativas '/>
          </li>
          <li>
          <LinkNav url="/j" texto='Comunidade'/>
          </li>
          <li>
          <LinkNav url="/k" texto='Acessibilidade'/>
          </li>
          <li>
          <LinkNav url="/l" texto='Carreiras'/>
          </li>
    </ul>
    </footer>
  )
}

export default Footer
