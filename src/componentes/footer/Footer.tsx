import './Footer.css'
import Link from './../link/Link'

export function Footer(){
  return(
    <footer className='footer-footer'>
        <div>
        <img className='footer-img' src='src/componentes/rodape.png' />
      </div>
     <ul className='Lista'>
    <li>
        <h3> Produtos </h3>
    </li>
    <li>
        <Link texto='Compre sua Barbie'/>
          </li>
          <li>
          <Link texto='Assistir'/>
          </li>
          <li>
          <Link texto='Acessórios'/>
          </li>
          <li>
          <Link texto='Roupas'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3> Informações</h3>
    </li>
    <li>
        <Link texto='Cookies'/>
          </li>
          <li>
          <Link texto='Sobre'/>
          </li>
          <li>
          <Link texto='Atendimento'/>
          </li>
          <li>
          <Link texto='Feedback'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3>Filmes</h3>
    </li>
    <li>
        <Link texto='Barbie Lago Dos Cisnes '/>
          </li>
          <li>
          <Link texto='Babie-A Princesa & a Pop Star'/>
          </li>
          <li>
          <Link texto='Barbie-Life in the Dreamhouse'/>
          </li>
          <li>
          <Link texto='Barbie Rainha das Fadas'/>
          </li>
    </ul>

    <ul className='Lista'>
    <li>
        <h3>Sobre nós</h3>
    </li>
    <li>
        <Link texto='Informações corporativas '/>
          </li>
          <li>
          <Link texto='Comunidade'/>
          </li>
          <li>
          <Link texto='Acessibilidade'/>
          </li>
          <li>
          <Link texto='Carreiras'/>
          </li>
    </ul>
    </footer>
  )
}

export default Footer