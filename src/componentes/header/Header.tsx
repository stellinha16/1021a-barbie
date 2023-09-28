import './Header.css'
import Link from '../linknav/LinkNav'
import Barbe from '../img/barbiezinha.png'

export function Header(){
  return(
    <header className='header-header'>
      <div>
        <img className="Logo"src={Barbe} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link url="/" texto='Home'/>
          </li>
          <li>
          <Link url="/Noticia" texto='Noticia'/>
          </li>
          <li>
          <Link url="/Sobre" texto='Sobre'/>
          </li>
          <li>
          <Link url="/Contato" texto='Contato'/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header