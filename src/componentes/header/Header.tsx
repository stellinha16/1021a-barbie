import './Header.css'
import LinkNav from '../linknav/LinkNav'
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
            <LinkNav url="/" texto='Home'/>
          </li>
          <li>
          <LinkNav url="/Noticia" texto='Noticia'/>
          </li>
          <li>
          <LinkNav url="/Sobre" texto='Sobre'/>
          </li>
          <li>
          <LinkNav url="/Contato" texto='Contato'/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header