import imagem from "./../../componentes/img/filme.jpg"
import './Filme.css'
type FilmeProps ={
    titulo:string
    sinopse:string
    imagem:string

}
function Filme(props:FilmeProps){
    return(
        <div className="filme-content">

            <img className="img-filme" src={imagem} alt="" />
            <div className="text-barbie">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.sinopse}</p>
            </div>
        </div>
    )
}

export default Filme