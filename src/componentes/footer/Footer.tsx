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
          <LinkNav url="/" texto='Assistir'/>
          </li>
          <li>
          <LinkNav url="/" texto='Acessórios'/>
          </li>
          <li>
          <LinkNav url="/" texto='Roupas'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3> Informações</h3>
    </li>
    <li>
        <LinkNav url="/" texto='Cookies'/>
          </li>
          <li>
          <LinkNav url="/" texto='Sobre'/>
          </li>
          <li>
          <LinkNav url="/" texto='Atendimento'/>
          </li>
          <li>
          <LinkNav url="/" texto='Feedback'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3>Filmes</h3>
    </li>
    <li>
        <LinkNav url="/" texto='Barbie Lago Dos Cisnes '/>
          </li>
          <li>
          <LinkNav url="/" texto='Babie-A Princesa & a Pop Star'/>
          </li>
          <li>
          <LinkNav url="/" texto='Barbie-Life in the Dreamhouse'/>
          </li>
          <li>
          <LinkNav url="/" texto='Barbie Rainha das Fadas'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3>Sobre nós</h3>
    </li>
    <li>
        <LinkNav url="/" texto='Informações corporativas '/>
          </li>
          <li>
          <LinkNav url="/" texto='Comunidade'/>
          </li>
          <li>
          <LinkNav url="/" texto='Acessibilidade'/>
          </li>
          <li>
          <LinkNav url="/" texto='Carreiras'/>
          </li>
    </ul>
    </footer>
  )
}

export default Footer